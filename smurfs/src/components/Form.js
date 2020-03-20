import React, {useContext} from "react";
import TheContexts from "../contexts/TheContext"

import {Container, Segment, Header, Divider, Grid, Icon, Image, Form, Input, Button} from 'semantic-ui-react'
import axios from "axios";

let url = "http://localhost:3333/smurfs"

const Formx = () => {
  
  const { setSmurfs } = useContext(TheContexts)
  const initialState = {
    name: '',
    age: '',
    height: ''
  }

  const [data, setData] = React.useState(initialState);

  const handleInputs = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios
    .post("http://localhost:3333/smurfs", {
      name: data.name,
      age: data.age,
      height: data.height
    })
    .then(res => {
      setSmurfs(res.data)
      // console.log("IN FORM.JS: ", res.data)
      setData(initialState)
    })
    .catch(err => {
      console.log("duhhhhhh: ", err)
    })
  }
return(
  <Container>
    <Header>
      Smurf Search
    </Header>
  <Form onSubmit={handleSubmit}>
    <Form.Field>

      
      <Input
      type="text"
      name="name"
      id="name"
      value={data.name}
      onChange={handleInputs}
      placeholder="Name"
     
      />

<Input
      type="text"
      name="age"
      id="age"
      value={data.age}
      onChange={handleInputs}
      placeholder="Age"
      />


<Input
      type="text"
      name="height"
      id="height"
      value={data.height}
      onChange={handleInputs}
      placeholder="Height"
      
      />
   </Form.Field>
   <button type="submit">
     add smurf
   </button>
  </Form>
  

  </Container>
)
}

export default Formx

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names

//https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index