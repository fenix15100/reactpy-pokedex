import os
from flask import Flask,Response,jsonify
from flask import send_from_directory


app = Flask(__name__)
app.config['DEBUG'] = True

@app.route('/api/v1/status')
def status():
    status = {
        "Backend":"Python Flask Server",
        "Description":"I'am Backend API for reactpy-pokedex"
    }
    
    return jsonify(status)

#Handles any requests that don't match the ones above and redirect to react static client route system
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    path_dir = os.path.abspath("./../build") #path react build
    print(path_dir)
    return send_from_directory(os.path.join(path_dir),'index.html')


# Entry Point for the app
if __name__ == "__main__":
    app.run()