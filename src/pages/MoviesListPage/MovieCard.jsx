import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function MovieCard({movie}) {
  return (
    <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.posterPath} />
            <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.releaseDate}
        </Card.Text>
      </Card.Body>


    </Card>
  )
}
