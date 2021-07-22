import React,{useEffect,useState,Fragment} from 'react';
import Pokemon from './Pokemon';


const App = ()=> {
  /*
  const [statusApi,setStatusApi] = useState({});
  useEffect(() => {
    //Prove connection to Backend API
    const getProveAPI = async ()=>{
      let request = await fetch("/api/v1/status");
      if (request.status === 200){
        let response = await request.json()
        setStatusApi(response);
      }else{
        console.error("error de conexion contra la API");
      }
    }
    getProveAPI();

      
  },[]);*/

  const [pokemons,setPokemons] = useState([]);
  useEffect(() => {
    //Prove connection to Backend API
    const getPokemonsList = async ()=>{
      let request = await fetch("/api/v1/getPokemons");
      if (request.status === 200){
        let response = await request.json()
        setPokemons(response.results);
      }else{
        console.error("error de conexion contra la API");
      }
    }
    getPokemonsList();

      
  },[]);
  return (
    <Fragment>
      {pokemons.map((pokemon,index)=>(
                    <Pokemon
                        key={index}
                        pokemon={pokemon}
                    />

      ))}
    </Fragment>
  );
}

export default App;
