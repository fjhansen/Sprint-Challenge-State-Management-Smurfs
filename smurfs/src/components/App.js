import React, {useState, useEffect} from 'react';
import axios from "axios"
import "./App.css";
import {Container, Header, Divider} from 'semantic-ui-react'

//Context
import {TheContext} from '../contexts/TheContext'

//Components
import Smurfs from './Smurfs'
import Formx from './Form'

let url = "http://localhost:3333/smurfs"

const App = () => {
const [smurfs, setSmurfs] = useState([])

useEffect(() => {
  axios
  .get(url)
  .then(res => {
    console.log("D A T A: ", res.data)
  })
  // .catch(err=> {})
},[])

  return(
    <TheContext.Provider value={smurfs}>
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
    </TheContext.Provider>
   
  )
}

export default App;
