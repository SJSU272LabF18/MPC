import requests
import sys
import os

os.system(python predict.py sys.argv[1])
fileName, ext = sys.argv[1.split('.')]
picFileName = fileName + '.png'
files = {'file': open(picFileName, 'rb')}
requests.post('http://localhost:5000/upload', files = files)
payload = {}
requests.post()