import React from 'react';
import {Grid,Header, Button} from 'semantic-ui-react';

/*
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
export default orderSum;*/


import axios from 'axios';

export default class orderData extends React.Component {
  state = {
    orders: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/order`)
      .then(res => {
        const orders = res.data;
        console.log(orders);
        this.setState({ orders });
      })
  }

  render() {
    return (
      <div>
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

        <Header
          size='huge' 
          color='black'
          textAlign='center'
          style={{marginTop:120}}>
          Order Summaries
        </Header>

        <div class="ui simple dropdown item" style={{marginLeft: 58, marginBottom:20}}>
          <span class="text">Order Type</span>
          <i class="dropdown icon"></i>
          <div class="menu inverted" style={{marginTop:-1}}>
            <div class="item">All Orders</div>
            <div class="item">Current Orders</div>
            <div class="item">Completed Orders</div>
          </div>
        </div>
        

      <Grid textAlign='center' style={{ height: '75vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 1050 }}>
          <style>
          {`
          html, body {
          background-color: #C0C0C0 ;
          }
          `}
          </style>

        { this.state.orders.map(order => 
            <h3 class="ui block header" style={{margin:2}}>
              <div class="ui horizontal segments">
                <a class="ui segment" href='/orderData' style={{width:100}}>
                  <p>Order ID: {order.orderID}</p>
                </a>
                <div class="ui segment" style={{width:100}}>
                  <p>Supplier: {order.supplier}</p>
                </div>
                <div class="ui segment" style={{width:100}}>
                  <p>Date Placed: {order.createdAt}</p>
                </div>
                <div class="ui segment" style={{width:100}}>
                  <p>Status: {order.shippingStatus}</p>
                </div>
                <div class="ui segment" style={{width:100}}>
                  <Button color="teal" href='/orderData'>View Invoice</Button>
                </div>
              </div>
            </h3>
          )}

        </Grid.Column>
      </Grid>
      </div>

      
    )
  }
}