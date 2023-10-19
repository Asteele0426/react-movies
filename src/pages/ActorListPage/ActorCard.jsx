import React from 'react'
import Card from 'react-bootstrap/Card'

export default function ActorCard({actor}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{actor}</Card.Title>
        </Card.Body>
    </Card>
   
  )
}
