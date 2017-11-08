from bs4 import BeautifulSoup, Tag
import requests
import json
site = "https://courses.wustl.edu/CourseInfo.aspx?"
schools = ['E','B','L','F','A']
courseData = []
uniqueIDs = {}
count = 1
for s in schools:
    params = {
        'type': 'sem',
        'sem': 'fl2017',
        'sch': s,
    }
    r = requests.get(site, params)
    soup = BeautifulSoup(r.content, "html5lib") # lxml is faster but might miss some things
    breaks = soup.find_all("hr")
    sections = []
    for hr in breaks:
        sections.append(hr.find_parent("div")) # each course is separated by <hr/> so each sec is a course
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
        homeIdent = sec.find("a", class_="HomeIdentLink").get_text()
        isMain = True
        if homeIdent == 'Ident':
            isMain = False
        courseInfo['isMain'] = isMain
        sameAs = []
        for same in sec.find_all("a", class_="RedLink"):
            if 'http' not in same.get_text():
                sameAs.append(same.get_text())
        courseInfo['sameAs'] = sameAs
        key = courseInfo['dept'] + ' ' + courseInfo['courseNum']
        if len(sameAs) > 0 :
            print(key + ' -> ' + str(sameAs)) # for verification
        if key in uniqueIDs: # an ident added it already
            courseInfo['val'] = uniqueIDs[key]
        else:
            for same in courseInfo['sameAs']:
                if same in uniqueIDs: # one of its idents has been added already
                    courseInfo['val'] = uniqueIDs[same]
                    uniqueIDs[key] = uniqueIDs[same]
            if key not in uniqueIDs: # no ident has been added
                courseInfo['val'] = count
                uniqueIDs[key] = count
                count += 1
        for same in courseInfo['sameAs']: # make sure its idents have same id
            uniqueIDs[same] = uniqueIDs[key]
        courseInfo['id'] = courseInfo['dept'] + '-' + courseInfo['courseNum']
        courseData.append(courseInfo)
with open('allCoursesInfoFL17.json', 'w') as f:
    json.dump(courseData, f, indent=4)
