import React from 'react';
import {Grid,Header,Form,Segment,Button} from 'semantic-ui-react';

//TODO: Decide if that is the layout/colors we want, add routing to admin, client page

function Login() {
  const style = {
    h1: {
      marginBottom: '3em',
    },
    Button: {
        marginBottom: '1em'
    }
}
return (
  
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>

    <style>
      {`
        html, body {
        background-color: #C0C0C0 ;
      }
    `}
    </style>

      <Header //main header
        size='huge' 
        style={style.h1} 
        color='blue' >
        Log-in to see your dashboard
      </Header>

      <Form size='large'>
        <Segment stacked>

          <Form.Input //Username box
            placeholder='Username' 
          />

          <Form.Input //Password box
            placeholder='Password'
            type='password'            
          />

          <Button //login button
            fluid
            style={style.Button}
            size='medium'
            color='blue' 
            href='/adminHome'>
            Login
          </Button>
        
          <Button //forgot password button
            color='blue' 
            size='medium' 
            href='/forgotPW'>
            Forgot Password?
          </Button>
          
        </Segment>
      </Form>
      </Grid.Column>
      </Grid>
)

}
export default Login;