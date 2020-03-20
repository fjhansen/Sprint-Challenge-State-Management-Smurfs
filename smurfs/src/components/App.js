import React, {useState, useEffect} from 'react';
import axios from "axios"

import {Container, Header, Divider} from 'semantic-ui-react'

//Components
import Smurfs from './Smurfs'
import Formx from './Form'

import "./App.css";

const App = () => {
  return(
    <Container textAlign="center">
      <Header>Smurf 3.0 W/ Context</Header>
      <p>Smurfs are blue...right?</p>
      <Divider>
 
        <Smurfs/>
      </Divider>
      <Divider>
    <Formx/> 
    </Divider>
    </Container>
   
  )
}

export default App;
