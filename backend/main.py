from flask import Flask
import json
app = Flask(__name__)

@app.route('/api')
def fake_json_data():
    with open('UserData.json', 'r') as f:
        return json.dumps(json.load(f))
    