import os
from flask import Flask, jsonify, render_template, request


app = Flask(__name__,
                template_folder=os.path.join(os.getcwd(), 'app', 'templates'),
                static_folder=os.path.join(os.getcwd(), 'app', 'static'))

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/get_json', methods=['POST'])
def search():

    data = request.get_json()
    query = data['search_user']
 
    return jsonify(data)
 


if __name__ == '__main__':
    app.run(debug=True)
