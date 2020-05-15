import os
from flask import Flask,Response,jsonify
from flask import send_from_directory


app = Flask(__name__,static_folder='./build', static_url_path='/')
app.config['DEBUG'] = True

@app.route('/api/v1/status')
def status():
    status = {
        "Backend":"Python Flask Server",
        "Description":"I'am Backend API for reactpy-pokedex",
        "Status":"OK"
    }
    
    return jsonify(status)

#Handles any requests that don't match the ones above and redirect to react static client route system
@app.route("/2", defaults={'path': ''})
@app.route("/<path:path>")
@app.route("/<string:path>")
@app.route("/<path:path>/<string:path>")
def serve(path):
    return send_from_directory('./build','index.html')


# Entry Point for the app
if __name__ == "__main__":
    app.run()