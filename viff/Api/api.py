import commands
import os
from flask import Flask, request, redirect, url_for, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo
from werkzeug.utils import secure_filename
from bson.objectid import ObjectId

UPLOAD_FOLDER = '/home/adityadoshatti/1st_Sem/CMPE272/riff/viff/UploadFolder'
ALLOWED_EXTENSIONS = set(['csv'])

app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MONGO_DBNAME'] = 'patientalyze'
app.config['MONGO_URI'] = 'mongodb://Team12:Team12@ds123929.mlab.com:23929/patientalyze'

mongo = PyMongo(app)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload', methods=['POST'])
def upload_file():
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
    owner = req_data['owner']
    connections = mongo.db.connections
    command = 'python ./../viff-1.0/apps/generate-config-files.py '
    command += '-n ' + str(userCount) + ' -t 1 '
    for i in range(1,userCount+1):
        port = 9000 + i
        command += 'localhost:' + str(port) +' '
    status, output = commands.getstatusoutput(command)
    print output
    if status == 0:
        connections.insert({'owner':owner, 'userCount': userCount, 'currRemainingCount': userCount})
        return '', 200
    else:
        return 'Failed', 500

@app.route('/getAllConnections', methods=['GET'])
def getConnections():
    connections = mongo.db.connections
    retVal = {}
    conList = []
    #{u'owner': u'MGM Hospital', u'currRemainingCount': 0, u'_id': ObjectId('5bf87e28101c377f12d94d7f'), u'userCount': 2}
    for doc in connections.find():
        conList.append({'owner':doc['owner'], 'currRemainingCount': doc['currRemainingCount'], '_id':''+str(doc['_id']), 'userCount': doc['userCount']})
    retVal['return']  = conList
    return jsonify(retVal), 200

@app.route('/join', methods=['POST'])
def join_connection():
    req_data = request.get_json()
    conn_id = req_data['_id']
    value = req_data['value']
    #conn_id = '5bf87e28101c377f12d94d7f'
    connections = mongo.db.connections
    parser = connections.find({'_id': ObjectId(conn_id)})
    for doc in parser:
        connDoc = doc
    currCount = connDoc['currRemainingCount']
    if  currCount > 0:
        playerNum = connDoc['userCount'] - (currCount-1)
        command = 'python ./../viff-1.0/apps/sum.py --no-ssl player-' + str(playerNum) + '.ini ' + str(value)
        print command
        print connections.update({'_id': ObjectId(conn_id)}, { '$inc' : {'currRemainingCount':-1}})
        status, output = commands.getstatusoutput(command)
        if status == 0:
            print output
            retVal = {}
            retVal['sum'] =  str(output)
            return jsonify(retVal), 200
        else:
            'Joining Failed', 404
    else:
        return 'Connection Full', 404






if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
