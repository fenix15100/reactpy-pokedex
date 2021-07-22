import React,{useEffect,useState} from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner'

const Pokemon = ({pokemon})=> {
    const [details,setDetails] = useState({});
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
      const getPokemonsDetails = async ()=>{
        
        let request = await fetch(`/api/v1/getBasicInfoPokemonByName/${pokemon.name}`);
        if (request.status === 200){
          let response = await request.json()
          setDetails(response);
          setLoading(false)
        }else{
          console.error("error de conexion contra la API");
          setLoading(false)
        }
      }
      getPokemonsDetails();
      
  
        
    },[pokemon.name]);
    return (
        <div className="text-block">
            {isLoading
                ?<Spinner className="spinload" animation="grow" variant="info"/>
                :
                <Card style={{ width: '10rem' }}>
                    <Card.Img variant="top" src={details.sprites.front_default} />
                    <Card.Body>
                        <Card.Title>{pokemon.name}</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
        } </div>   
        
    );

}

export default Pokemon;