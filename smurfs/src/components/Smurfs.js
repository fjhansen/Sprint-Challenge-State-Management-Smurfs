import React, {useContext} from "react"
import TheContexts from '../contexts/TheContext'

import {Container, Segment, Header, Divider, Grid, Icon, Image, Card} from 'semantic-ui-react'

const Smurfs = () => {
  const { smurfs } = useContext(TheContexts)
  console.log("IN SMURFS.JS: ", smurfs)
  return(
    <Container>
      <Card.Group>
      {smurfs.map(smurf => {
        return(
          <Card key={smurf.id}>
            <Card.Content>
              <Card.Header>{smurf.name}</Card.Header>
              <Card.Meta>{smurf.age}</Card.Meta>
              <Card.Description>{smurf.height}</Card.Description>
            </Card.Content>
          </Card>
        )
      })} 
      </Card.Group>
    </Container>
  )
}

export default Smurfs