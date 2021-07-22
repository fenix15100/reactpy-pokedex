import React,{useEffect,useState,Fragment} from 'react';
import { Row,Col } from 'react-bootstrap';
import Pokemon from './Pokemon';
import './Pokemon.css'


const App = ()=> {
  const [pokemons,setPokemons] = useState([]);
  useEffect(() => {
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
      <Row>
          <Col className="projects-grid">
            {pokemons.map((pokemon,index)=>(
                          <Pokemon
                              key={index}
                              pokemon={pokemon}
                          />
            ))}
          </Col>
      </Row>     
    </Fragment>
  );
}

export default App;
