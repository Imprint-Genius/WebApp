import React from 'react';
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

//TODO: Pass through 'client' to header, figure out how to make the cards look nicer

function Client(props) {
	const [user, setUser] = useState();
	const [active, setActive] = useState(null);
	const [goBack, setGoBack] = useState(false);
 
	const [
		clientRedirectToComplete,
		setClientRedirectToComplete,
	] = useState(false);
	const [
		clientRedirectToCurrent,
		setClientRedirectToCurrent,
	] = useState(false);
	useEffect(() => {
		setUser(props.location.state.name);
	});

	const renderClientRedirect = () => {
		if (clientRedirectToComplete) {
			return (
				<Redirect
					to={{
						pathname: '/orderSum',
						state: { name: user, complete: true },
					}}
				/>
			);
		} else if (clientRedirectToCurrent) {
			return (
				<Redirect
					to={{
						pathname: '/orderSum',
						state: { name: user, complete: false },
					}}
				/>
			);
		}
	};

	if (goBack) {
		if(props.location.state.admin){
			return (
				<Redirect
					to={{
						pathname: '/AdminHome',
						state: { name: user, admin: props.location.state.admin },
					}}
				/>
			);
		}else{
			return (
				<Redirect
					to={{
						pathname: '/orderSum',
						state: { name: user, admin: props.location.state.admin },
					}}
				/>
			);
		}
		
	}
	const backToHome = () => {
		setGoBack(true);
	}

	const style = {
		h1: {
			marginTop: '5em',
			marginBottom: '3em',
		},
	};
	return (
		<div>
			{renderClientRedirect()}
			<Container>
				<style>
					{`
						html, body {
						background-color: #C0C0C0 ;
						}
					`}
				</style>

				<Header //main header
					as="h1"
					color="blue"
					style={style.h1}
					textAlign="center"
				>
					{user}
				</Header>

				<div>
					<Menu fixed='top' color='teal' size='huge' inverted>
					<Menu.Menu position='left'>
						<Menu.Item
						name='Client Dashboard'
						active={active === 'ClientDashboard'}
						/>
						<Menu.Item
						name='Home'
						active={active === 'Home'}
						onClick={backToHome}
						/>
					</Menu.Menu>

					<Menu.Menu position='right'>
						<Menu.Item
						name='Logout'
						active={active === 'Logout'}
						/>
						</Menu.Menu>
					</Menu>
				</div>

				<Grid
					textAlign="center"
					style={{ height: '70vh' }}
					verticalAlign="middle"
				>
					<Button
						size="massive"
						style={{
							height: 500,
							width: 500,
							margin: 25,
							marginTop: -10,
						}}
						onClick={() => setClientRedirectToCurrent(true)}
					>
						Current Orders
					</Button>

					<Button
						size="massive"
						style={{
							height: 500,
							width: 500,
							margin: 25,
							marginTop: -10,
						}}
						onClick={() => setClientRedirectToComplete(true)}
					>
						Completed Orders
					</Button>
				</Grid>
			</Container>
		</div>
	);
}
export default Client;
