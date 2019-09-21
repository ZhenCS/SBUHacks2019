#!/usr/bin/python3.6
from flask import Flask
from scraper import mention_cloud, mention_network
import json

app = Flask(__name__)

@app.route('/<string:name>/<int:tweets>', methods=['GET'])
def index(name, tweets):
        return mention_cloud(name, tweets)
                
@app.route('/<string:name>/<int:tweets>/<int:depth>', methods=['GET'])
def index2(name, tweets, depth):
        return json.dumps(mention_network(name, tweets, depth))
                
if __name__ == '__main__':
        app.run(host="0.0.0.0")
