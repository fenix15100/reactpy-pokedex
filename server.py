import os
import requests
from flask import Flask,Response,jsonify,request
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

'''
Get all Pokemons entries can send offset and limit param in querystring format
Example: /api/v1/getPokemons?offset=0&limit=20
Get from pokemon number 0 and retrieve 20 pokemons more
'''
@app.route('/api/v1/getPokemons')
def getPokemons():
    offsetParam = request.args.get('offset',default="0",type = str)
    limitParam = request.args.get('limit',default="964",type = str)
    r = requests.get(f"https://pokeapi.co/api/v2/pokemon/?offset={offsetParam}&limit={limitParam}")
    
    return jsonify(r.json())
  

'''
Get Full information from pokemon by name
Example: /api/v1/getFullInfoPokemonByName/pikachu
Get from Remote API a Pikachu Object
'''
@app.route('/api/v1/getFullInfoPokemonByName/<string:name>')
def getFullInfoPokemonByName(name):
    r = requests.get(f"https://pokeapi.co/api/v2/pokemon/{name}")
    return jsonify(r.json())


'''
Get Full information from pokemon by id 
Example: /api/v1/getFullInfoPokemonById/1
Get from Remote API a Pokemon number 1
'''
@app.route('/api/v1/getFullInfoPokemonById/<int:id>')
def getFullInfoPokemonById(id):
    r = requests.get(f"https://pokeapi.co/api/v2/pokemon/{id}")
    return jsonify(r.json())



#Handles any requests that don't match the ones above and redirect to react static client route system
@app.route("/", defaults={'path': ''})
@app.route("/<path:path>")
@app.route("/<string:path>")
def serve(path):
    return send_from_directory('./build','index.html')


# Entry Point for the app
if __name__ == "__main__":
    app.run()