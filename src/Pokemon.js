import React,{useEffect,useState} from 'react';
import Card from 'react-bootstrap/Card';

const Pokemon = ({pokemon})=> {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="#" />
        <Card.Body>
          <Card.Title>{pokemon.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    );

}

export default Pokemon;