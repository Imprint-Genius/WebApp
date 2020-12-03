import React from 'react';
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import {
	Grid,
	Header,
	Container,
	Card,
	Button,
} from 'semantic-ui-react';

//TODO: Pass through 'client' to header, figure out how to make the cards look nicer

function Client(props) {
	const [user, setUser] = useState();

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
