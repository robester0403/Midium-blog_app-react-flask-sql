from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:123456@localhost/alchemy"
db = SQLAlchemy(app)

@app.route('/', methods=['GET'])
def index():
    return jsonify({'message': 'Hello this is a new instance?'})


if __name__ == '__main__':
    app.run(debug=True)





