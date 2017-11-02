# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""
import json
import requests
from pprint import pprint

with open('C:/Users/Danny/RMC-site/allCoursesInfo.json') as data_file:    
    fileData = json.load(data_file)
    

    
for i in range(len(fileData)):
    r = requests.post('http://localhost:8080/courses/add', data = {'id':fileData[i]['id'],
                                                         'name':fileData[i]['name'],
                                                         'school':fileData[i]['school'],
                                                         'dept':fileData[i]['dept'],
                                                         'number':fileData[i]['courseNum'],
                                                         'description':fileData[i]['description'],
                                                         'attrs':fileData[i]['attrs']})
    