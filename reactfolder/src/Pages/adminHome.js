import React from 'react';
import {Grid,Header,Button,Container,Card,Search} from 'semantic-ui-react';

//TODO: Actually pass through the 'admin' variable, figure out search UI, adjust spacing

function admin() {
    
return (
    <Container>
    <style>
      {`
        html, body {
        background-color: #89ADBC ;
      }
    `}
    </style>
    
    <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 10050 }}>
      <Header as='h1' color='black' textAlign='center'>
        Welcome, admin! 
      </Header>
      <Card.Group itemsPerRow={3}>
      {/* This is the card default, we need to pass in every store name and add a card for it,
            we can make them link to the other pages with 'href' */}
      <Card
                href='/clientHome'
                header='Store 1'
      />
      <Card
                href='#card-example-link-card'
                header='Store 2'
      />
      <Card
                href='#card-example-link-card'
                header='Store 3'
      />
      </Card.Group>

      </Grid.Column>
      </Grid>
      
      </Container>


)

}
export default admin;








