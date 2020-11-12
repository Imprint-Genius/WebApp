import React from 'react';
import {Grid,Header,Container,Card} from 'semantic-ui-react';
/*
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
      { This is the card default, we need to pass in every store name and add a card for it,
            we can make them link to the other pages with 'href' }
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
*/




import axios from 'axios';

export default class storeData extends React.Component {
  state = {
    stores: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/user`)
      .then(res => {
        const stores = res.data;
        this.setState({ stores });
      })
  }

  render() {
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
          color='blue' 
          textAlign='center'
          style={{marginTop:150, marginBottom:75}}>
          Welcome, username! 
        </Header>
  
  
        <Card.Group itemsPerRow={2}>
        { this.state.stores.map(store => 
        
        <Card color='blue' href='/clientHome'>
          <Card.Content>
        <Card.Header>{store.username}</Card.Header>
            <Card.Meta>
              <span className='date'>Placeholder for date joined</span>
            </Card.Meta>
            <Card.Description>
              Placeholder for store owner names
            </Card.Description>
          </Card.Content>
        </Card>  
        
        )}
        
        </Card.Group>
  
        </Grid.Column>
        </Grid>
        
        </Container>
    )
  }
}








