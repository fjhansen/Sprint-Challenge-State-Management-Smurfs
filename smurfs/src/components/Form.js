import React, {useContext} from "react";
// import {TheContext} from "../contexts/TheContext"

import {Container, Segment, Header, Divider, Grid, Icon, Image, Form, Input} from 'semantic-ui-react'


const Formx = () => {
return(
  <Container>
    <Header>
      Smurf Search
    </Header>
  <Form>
    <Form.Field>
      <label>Search:</label>
      <Form.Input
      placeholder="Smurf Search!"
      />
    </Form.Field>
  </Form>
  </Container>
)
}

export default Formx