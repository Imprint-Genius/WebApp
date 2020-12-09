import React from 'react';
import {Grid,Header,Form,Segment,Button} from 'semantic-ui-react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import config from '../config.js';

function ResetPW() {

    const [newPW, setPW] = useState();
    const [confirmPW, setconfirmPW] = useState();

    const firstPW = (evt) => {
        setPW(evt.target.value);
    };
    const finalPW = (evt) => {
        setconfirmPW(evt.target.value);
    };

  //  useEffect(() => {
  //      axios.get(config.server + 'api/user').then((res) => {
   //         const password = res.data;
   //         console.log(password);
//
    //    })
    //})

    const checkPW = async () => {
        if(newPW !== confirmPW) {
            alert("Error: Passwords must match");
        }
        else {
            //confirm the password
            alert("we did it reddit");
        }
    }

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
            Please enter your new password
          </Header>
            
          </Form>
      
          <Form size='large'>
            <Segment stacked>
    
            <Form.Input //email input
                placeholder='New password'
                type='password'
                onChange={firstPW}
                
              />
              <Form.Input
                placeholder='Confirm password'
                type='password'
                onChange={finalPW}
                />
    
              <Button //Go button
                color='blue'
                onClick ={checkPW}
                >
                Reset Password
              </Button>
    
            </Segment>
          </Form>
          </Grid.Column>
          
          </Grid>
    )
}
export default ResetPW;