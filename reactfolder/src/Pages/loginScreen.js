import React from 'react';
import {Grid,Header,Form,Segment,Button} from 'semantic-ui-react';

//TODO: Decide if that is the layout/colors we want, fix position of 'forgot password' button,
//      add routing to admin, client, or forgot password page

function Login() {
return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='olive' textAlign='center'>
        Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input 
          fluid 
          //icon='user' iconPosition='left' 
          placeholder='Username' />
          <Form.Input
            fluid 
            //icon='lock' iconPosition='left'
            placeholder='Password'
            type='password'
          />
          <Button color='olive' fluid size='medium'>
            Login
          </Button>
          
          <Button color='olive' fluid size='medium'>
            Forgot Password?
          </Button>
          
        </Segment>
      </Form>
      </Grid.Column>
      </Grid>
)

}
export default Login;