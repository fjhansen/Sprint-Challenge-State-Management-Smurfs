import React, {useState, useEffect} from 'react';
import axios from "axios"
import "./App.css";
import {Container, Header, Divider} from 'semantic-ui-react'



//Components
import Smurfs from './Smurfs'
import Formx from './Form'
//Context
import TheContexts from '../contexts/TheContext'

let url = "http://localhost:3333/smurfs"

const App = () => {
const [smurfs, setSmurfs] = useState([])

useEffect(() => {
  axios
  .get(url)
  .then(res => {
    console.log("D A T A: ", res.data)
    setSmurfs(res.data) //forgot this too... ugh! all good now though.
  })
  // .catch(err=> {})
},[])

  return(
   
    <Container textAlign="center">
      <Header>Smurf 3.0 W/ Context</Header>
      <p>Smurfs are blue...right?</p>
      <Divider>
  <TheContexts.Provider value={smurfs}>
<Smurfs/>
<Formx/> 
  </TheContexts.Provider>

      </Divider>
      <Divider>

    </Divider>
    </Container>
 
   
  )
}

export default App;
