import json
import requests

url = 'http://localhost:5000/api/courses/add?'
with open('allCoursesInfo.json') as file:
    courses = json.load(file)
for c in courses:
    params = {
        'val': c['val'],
        'name': c['name'],
        'school': c['school'],
        'dept': c['dept'],
        'number': c['courseNum'],
        'description': c['description'],
        'attrs': c['attrs'],
        'isMain': c['isMain']
    }
    r = requests.post(url, params)