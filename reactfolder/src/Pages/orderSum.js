import React from 'react';
import {Grid,Header, Button} from 'semantic-ui-react';


//TODO: Add sorting thing, autogenerate buttons that link to a certain orders data page
function orderSum() {
    const style = {
        h1: {
          marginBottom: '2em'
        },
        Button: {
            marginTop: '2em',
            height: '4em',
            
        }
    }

return (
    
    <Grid textAlign='center' style={{ height: '75vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 1050 }}>
        <style>
      {`
        html, body {
        background-color: #C0C0C0 ;
      }
    `}
    </style>
    <Header
        size='huge' 
        style={style.h1} 
        color='blue' 
        textAlign='center'>
        Order Summaries
    </Header>

    
    <Button 
        style={style.Button}
        color='yellow'
        fluid
        size='large' 
        href='/orderData'>
        Sample Data 1
        </Button>
      
    <Button 
        style={style.Button}
        color='red'
        fluid
        size='large' 
        href='/orderData'>
        Sample Data 2
    </Button>

    <Button 
        style={style.Button}
        color='blue'
        fluid
        size='large' 
        href='/orderData'>
        Sample Data 3
    </Button>

</Grid.Column>
    </Grid>
)


}
export default orderSum;