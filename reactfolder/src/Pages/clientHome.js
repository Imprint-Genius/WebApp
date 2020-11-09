import React from 'react';
import {Grid,Header,Container,Card} from 'semantic-ui-react';

//TODO: Pass through 'client' to header, figure out how to make the cards look nicer

function client() {
  const style = {
    h1: {
      marginTop: '5em',
      marginBottom: '3em'
    }
}
return (
    <Container>
    <style>
      {`
        html, body {
        background-color: #C0C0C0 ;
      }
    `}
    </style>
    
    <Grid textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 10550 }}>

      <Header //main header
        as='h1' 
        color='blue' 
        style={style.h1}
        textAlign='center'>
        Welcome, client!
      </Header>

      <Card.Group style={{height:330}} itemsPerRow={2}>
      <Card 
                
                color='blue'
                href='/orderSum'
                header='Current Orders'
                
      />
      <Card 
                
                color='blue'
                href='/orderSum'
                header='Completed Orders'
                
                
      />

      </Card.Group>
      </Grid.Column>
      </Grid>
      
      
      
      
      </Container>
)


}
export default client;