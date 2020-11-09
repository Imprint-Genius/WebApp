import React from 'react';
import {Grid,Header,Container,Card} from 'semantic-ui-react';

//TODO: Actually pass through the 'admin' variable, figure out search UI, adjust spacing

function admin() {
  const style = {
    h1: {
      marginBottom: '3em',
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
    
    <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 10050 }}>


      <Header //main header
        as='h1' 
        style={style.h1} 
        color='blue' 
        textAlign='center'>
        Welcome, admin! 
      </Header>


      <Card.Group itemsPerRow={3}>
      {/* This is the card default, we need to pass in every store name and add a card for it,
            we can make them link to the other pages with 'href' */}
      <Card
                color='blue'
                href='/clientHome'
                header='Store 1'
      />
      <Card
                color='blue'
                href='#card-example-link-card'
                header='Store 2'
      />
      <Card
                color='blue'
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








