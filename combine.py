import json

s18 = open('allCoursesInfoSP18.json', 'r')
f17 = open('allCoursesInfoFL17.json', 'r')
file1 = json.load(f17)
file2 = json.load(s18)
combo = []
idsToVal = {}
valToId = {}
count = 0
for course in file1:
    count = max(count, course['val'])
    idsToVal[course['id']] = course['val']
    if course['val'] in valToId:
        valToId[course['val']].append(course['id'])
    else:
        valToId[course['val']] = [course['id']]
count += 1
for course in file2:
    if course['id'] not in idsToVal: #new course key
        added = False
        for same in course['sameAs']: # check if any of its sames are in old file
            same = same.replace(" ", "-")
            if same in idsToVal: # has an ident that exists so use that val
                idsToVal[course['id']] = idsToVal[same]
                valToId[idsToVal[same]].append(course)
                course['val'] = idsToVal[same]
                file1.append(course)
                added = True
                break
        if not added:
            idsToVal[course['id']] = count
            valToId[count] = [course['id']]
            course['val'] = count
            count += 1
            file1.append(course)
    #else :
        #update the attrs bc they could have changed


with open('allCoursesInfo.json', 'w') as f:
    json.dump(file1, f, indent=4)
f17.close()
s18.close()