import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import {
	Grid,
	Header,
	Container,
	Card,
	Button,
	Menu,
	Dropdown,
	Icon,
} from 'semantic-ui-react';
import config from '../config.js';

export default class orderSum extends React.Component {
	state = {
		orders: [],
		complete: 0,
		active: null,
		selection: 'All Orders',
		goBack: false,
		logoutClicked: false,
		user: '',
		invoiceButton: false,
		invoiceID: '',
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

	renderClientRedirect = () => {
		if (this.state.goBack) {
			if (this.props.location.state.admin) {
				return (
					<Redirect
						to={{
							pathname: '/AdminHome',
							state: {
								name: this.props.location.state.account,
								admin: this.props.location.state.admin,
							},
						}}
					/>
				);
			} else {
				return (
					<Redirect
						to={{
							pathname: '/orderSum',
							state: {
								name: this.props.location.state.account,
								admin: this.props.location.state.admin,
							},
						}}
					/>
				);
			}
		} else if (this.state.logoutClicked) {
			return (
				<Redirect
					to={{
						pathname: '/',
					}}
				/>
			);
		}
	};

	render_pdf = () => {
		if (this.state.invoiceButton){
			return (
				<Redirect
					to={{
						pathname: '/pdf',
						state: { invoiceID: this.state.invoiceID, admin: this.props.location.state.admin },
					}}
				/>
			);
		}
	};

	setAll = () => {
		this.setState({ complete: 0, selection: 'All Orders' });
	};

	setCurrent = () => {
		this.setState({ complete: 1, selection: 'Current Orders' });
	};

	setComplete = () => {
		this.setState({ complete: 2, selection: 'Completed Orders' });
	};

	backToHome = (u) => {
		this.setState({
			goBack: true,
			selection: 'All Orders',
			complete: 0,
			user: u,
		});
	};

	logout = () => {
		this.setState({ logoutClicked: true, user: '' });
	};

	invoice = () => {
		this.setState({ invoiceButton: true});
	};

	render() {
		return (
			<div>
			{this.renderClientRedirect()}
			{this.render_pdf()}
			<div>
				<Menu fixed='top' color='teal' size='huge' inverted>
				<Menu.Menu position='left'>
					<Menu.Item
					name='Client Dashboard'
					active={this.active === 'ClientDashboard'}
					/>
					<Menu.Item
					name='Home'
					active={this.active === 'Home'}
					onClick={this.backToHome}
					/>
				</Menu.Menu>


						<Menu.Menu position="right">
							<Menu.Item
								name="Logout"
								active={this.active === 'Logout'}
								onClick={this.logout}
							/>
						</Menu.Menu>
					</Menu>
				</div>

				<Header
					size="huge"
					color="blue"
					textAlign="center"
					style={{ marginTop: 120, marginBottom: 40 }}
				>
					Order Summaries
				</Header>

				<Dropdown
					text={this.state.selection}
					size="huge"
					style={{ marginLeft: 58 }}
				>
					<Dropdown.Menu>
						<Dropdown.Item text="All Orders" onClick={this.setAll} />
						<Dropdown.Item
							text="Current Orders"
							onClick={this.setCurrent}
						/>
						<Dropdown.Item
							text="Completed Orders"
							onClick={this.setComplete}
						/>
					</Dropdown.Menu>
				</Dropdown>

				<Grid
					textAlign="center"
					style={{ height: '75vh', marginTop: 1 }}
					verticalAlign="top"
				>
					<Grid.Column style={{ maxWidth: 1050 }}>
						<style>
							{`
          html, body {
          background-color: #C0C0C0 ;
          }
          `}
					</style>

					{this.state.orders.map((order) => (
						 <div>
						 {order.isCompleted && (this.state.complete === 0 || this.state.complete === 2) ?
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
									 <Button color="teal" onClick={this.invoice}>
										View Invoice
									 </Button>
								 </div>
							 </div>
						 </h3>
						 : (
							<div>
						 	{order.isCompleted === false && (this.state.complete === 0 || this.state.complete === 1) ?
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
									 <Button color="teal" onClick={this.invoice}>
										 View Invoice
									 </Button>
								 </div>
							 </div>
						 </h3>
						 : null
						 }
						</div>)}
					</div>
					))}
				</Grid.Column>
			</Grid>

			</div>
		);
	}
}
