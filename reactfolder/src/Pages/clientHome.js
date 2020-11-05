import React from 'react';
import {Grid,Header,Button,Container,Card,Search} from 'semantic-ui-react';

//TODO: Pass through 'client' to header, figure out how to make the cards look nicer

function client() {
return (
    <Container>
    <style>
      {`
        html, body {
        background-color: #89ADBC ;
      }
    `}
    </style>
    
    <Grid textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 10550 }}>
      <Header as='h1' color='black' textAlign='center'>
        Welcome, client! 
      </Header>
      <Card.Group style={{height:130}} itemsPerRow={2}>
      <Card 
                href='/orderSum'
                header='Current Orders'
                co
      />
      <Card 
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