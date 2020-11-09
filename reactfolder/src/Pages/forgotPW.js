import React from 'react';
import {Grid,Header,Form,Segment,Button} from 'semantic-ui-react';

//TODO: actually get their email and send them an automated message... TBH this sounds very hard for us to do

function forgotPW() {
    const style = {
        h1: {
          marginBottom: '3em',
        }
    }
return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 650 }}>
    <style>
      {`
        html, body {
        background-color: #C0C0C0 ;
      }
    `}
    </style>

      <Form size='large'>
        
      <Header //main header
        as='h1' 
        color='blue' 
        style={style.h1} 
        textAlign='center' >
        Trouble logging in? Enter your email and we’ll send a link to reset your password
      </Header>
        
      </Form>
  
      <Form size='large'>
        <Segment stacked>

        <Form.Input //email input
            placeholder='Email'
            type='Email'
          />

          <Button //Go button
            color='blue'
            //href='whatever_link_we_decide'
            >
            Go
          </Button>

        </Segment>
      </Form>
      </Grid.Column>
      
      </Grid>
)


}
export default forgotPW;
