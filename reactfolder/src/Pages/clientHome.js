import React from 'react';
import {Grid,Header,Container,Card, Button} from 'semantic-ui-react';

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
    
    

      <Header //main header
        as='h1' 
        style={style.h1}
        textAlign='center'>
        Client Name
      </Header>

      <div class="ui huge teal top inverted fixed menu">
          <div class="item">
            <h3>Client Dashboard</h3>
          </div>
          <a class="item active" href='/clientHome'>
            Home
          </a>
          <a href='/orderSum' class="item">
            Orders
          </a>
          <a id="logout_btn" style={{marginLeft:942}} href="/" class="item">
            Logout
          </a>
      </div>

      <Grid textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>

      <Button 
      href='/orderSum' 
      size='massive' 
      style={{ height:500, width:500, margin:25, marginTop:-10}}
      >
        Current Orders
      </Button>

      <Button href='/orderSum' size='massive' style={{ height:500, width:500, margin:25, marginTop:-10}}>
        Completed Orders
      </Button>

      
    </Grid>
      
      
      
      
      </Container>
)


}
export default client;