from bs4 import BeautifulSoup, Tag
import requests
import json
site = "https://courses.wustl.edu/CourseInfo.aspx?"
allDepts = ["E62", "E81", "E35", "E44", "E60", "E37",
"L90", "L98", "L48", "L49", "L52", "L01", "L46", "L41", "L56", "L07", "L66", "L04", "L08", "L59", "L16", "L29", "L15", "L19", "L03", "L11", "L12", "L14", "L82", "L79", "L53", "L61", "L34", "L43", "L21", "L09", "L74", "L73", "L22", "L93", "L97", "L36", "L05", "L75", "L51", "L45", "L10", "L84", "L44", "L24", "L96", "L63", "L27", "L85", "L99", "L54", "L47", "L30", "L64", "L28", "L31", "L50", "L32", "L37", "L62", "L33", "L57", "L23", "L78", "L83", "L39", "L40", "L38", "L89", "L18", "L77", "L13",
"B50", "B60", "B51", "B52", "B62", "B56", "B99", "B53", "B63", "B54", "B64", "B55", "B65", "B57", "B67", "B58", "B66", "B59"]
courseData = []
for d in allDepts:
    params = {
        'type': 'sem',
        'sch': d[0],
        'dept': d,
        'crs': ''
    }
    r = requests.get(site, params)
    soup = BeautifulSoup(r.content, "html5lib") # lxml is faster but might miss some things
    breaks = soup.find_all("hr")
    sections = []
    for hr in breaks:
        sections.append(hr.find_parent("div"))
    for sec in sections:
        courseInfo = {}
        emtpyTag = soup.new_tag("foo")
        deptAndNum = sec.find("a", class_="saveNote")
        courseInfo['school'] = deptAndNum['sch']
        courseInfo['dept'] = deptAndNum['dept']
        courseInfo['courseNum'] = deptAndNum['crs']
        courseInfo['name'] = list(sec.find_all(style='font-weight: bold; text-align:left;'))[1].string
        before = sec.find(string="Description:")
        courseInfo['description'] = before.find_parent("td").next_sibling.get_text().strip('\n')
        attrType = sec.find("a", class_="CrsAttr") or emtpyTag
        type = attrType
        attrs = ""
        for val in attrType.next_siblings:
            if not isinstance(val, Tag):
                continue
            if val['class'][0] == 'CrsAttr':
                type = val
                continue
            attrs += type.get_text() + "-" + val.get_text().split(None,1)[0] + ","
        courseInfo['attrs'] = attrs
        sameAs = []
        for same in sec.find_all("a", class_="RedLink"):
            sameAs.append(same.get_text())
        courseInfo['sameAs'] = sameAs
        courseData.append(courseInfo)
with open('allCoursesInfo.json', 'w') as f:
    json.dump(courseData, f, indent=4)
