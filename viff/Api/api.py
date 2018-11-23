import commands
import os
from flask import Flask, request, redirect, url_for
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = '/home/adityadoshatti/1st_Sem/CMPE272/riff/viff/UploadFolder'
ALLOWED_EXTENSIONS = set(['csv'])

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload', methods=['POST'])
def upload_file():
    print "I am called"
    print request
    print request.files
    # checking if the file is present or not.
    if 'file' not in request.files:
        return "No file found"
    
    file = request.files['file']
    if allowed_file(file.filename):
        file.save(app.config['UPLOAD_FOLDER'] + "/" + file.filename)
        return "File successfully saved"
    else:
        return "Invalid file type"

@app.route('/register', methods=['POST'])
def generate_config():
    req_data = request.get_json()
    userCount = req_data['userCount']
    command = 'python ./../viff-1.0/apps/generate-config-files.py '
    command += '-n ' + str(userCount) + ' -t 1 '
    for i in range(1,userCount+1):
        port = 9000 + i
        command += 'localhost:' + str(port) +' '
    status, output = commands.getstatusoutput(command)
    print output
    if status == 0:
        return '', 200
    else:
        return 'Failes', 500

if __name__ == "__main__":
    app.run()
