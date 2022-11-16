from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:123456@localhost/alchemy"
db = SQLAlchemy(app)

@app.route('/', methods=['GET'])
def index():
    return jsonify({'message': 'Hello this is a new instance?'})


# tables model
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username
    
    # def __init__(self, username, email):
    #     self.username = username
    #     self.email = email

class BlogPost(db.Model):
  __tablename__ = "blogposts"
  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(80), unique=True, nullable=False)
  author = db.Column(db.String(80), nullable=False)
  content = db.Column(db.Text, nullable=False)
  
  def __repr__(self):
    return '<BlogPost %r>' % self.title

# routes

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    output = []
    for user in users:
        user_data = {}
        user_data['username'] = user.username
        user_data['email'] = user.email
        output.append(user_data)
    return jsonify({'users': output})

@app.route('/users/<user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.filter_by(id=user_id).first()
    if not user:
        return jsonify({'message': 'No user found!'})
    user_data = {}
    user_data['username'] = user.username
    user_data['email'] = user.email
    return jsonify({'user': user_data})

@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    new_user = User(username=data['username'], email=data['email'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'New user created!'})
    
@app.route('/users/<user_id>', methods=['PUT'])
def promote_user(user_id):
    user = User.query.filter_by(id=user_id).first()
    if not user:
        return jsonify({'message': 'No user found!'})
    user.admin = True
    db.session.commit()
    return jsonify({'message': 'The user has been promoted!'})

@app.route('/users/<user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.filter_by(id=user_id).first()
    if not user:
        return jsonify({'message': 'No user found!'})
    db.session.delete(user)
    db.session.commit()
    return jsonify({'message': 'The user has been deleted!'})

# Python terminal command doesn't work so hardcode the table creation here
with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)

