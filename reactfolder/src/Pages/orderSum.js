import React from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';
import config from '../config';

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
		orders: [],
	};

	componentDidMount() {
		const x =
			config.server +
			'api/order/getByUserID/' +
			this.props.location.state.name;
		axios.get(x).then((res) => {
			const o = res.data;
			this.setState({
				orders: o,
				user: this.props.location.state.name,
			});
		});
	}

	render() {
		return (
			<Grid
				textAlign="center"
				style={{ height: '75vh' }}
				verticalAlign="middle"
			>
				<Grid.Column style={{ maxWidth: 1050 }}>
					<style>
						{`
          html, body {
          background-color: #C0C0C0 ;
          }
          `}
					</style>
					<Header
						size="huge"
						color="blue"
						textAlign="center"
						style={{ marginTop: 80, marginBottom: 60 }}
					>
						Order Summaries
					</Header>

					{this.state.orders.map((order) => (
						<h3 class="ui block header" style={{ margin: 2 }}>
							<div class="ui horizontal segments">
								<div class="ui segment" style={{ width: 100 }}>
									<p>Order ID: {order.orderID}</p>
								</div>
								<div class="ui segment" style={{ width: 100 }}>
									<p>Supplier: {order.supplier}</p>
								</div>
								<div class="ui segment" style={{ width: 100 }}>
									<p>Date Placed: {order.createdAt}</p>
								</div>
								<div class="ui segment" style={{ width: 100 }}>
									<p>Status: {order.shippingStatus}</p>
								</div>
								<div class="ui segment" style={{ width: 100 }}>
									<Button color="teal" href="/orderData">
										View Invoice
									</Button>
								</div>
							</div>
						</h3>
					))}
				</Grid.Column>
			</Grid>
		);
	}
}
