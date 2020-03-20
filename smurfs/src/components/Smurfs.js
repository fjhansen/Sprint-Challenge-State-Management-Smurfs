import React, {useContext} from "react"
import {TheContext} from "../contexts/TheContext" 

import {Container, Segment, Header, Divider, Grid, Icon, Image, Card} from 'semantic-ui-react'

const Smurfs = () => {
  const smurfs = useContext(TheContext);
  console.log("IN SMURFS.JS: ", smurfs)
  return(
    <Container>
      <p>Placeholder!</p>
      
    </Container>
  )
}

export default Smurfs