import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import config from '../config.js';

import {
	Grid,
	Header,
	Form,
	Segment,
	Button,
} from 'semantic-ui-react';
import { all } from 'async';

//TODO: Decide if that is the layout/colors we want, add routing to admin, client page

function Login() {
	const [allUser, setAllUser] = useState();
	const [user, setUser] = useState();
	const [password, setPassword] = useState();
	const [adminRedirect, setAdminRedirect] = useState(false);
	const [clientRedirect, setClientRedirect] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);

	const renderAdminRedirect = () => {
		if (adminRedirect) {
			return (
				<Redirect
					to={{
						pathname: '/adminHome',
						state: { name: user, admin: isAdmin },
					}}
				/>
			);
		}
	};
	const renderClientRedirect = () => {
		if (clientRedirect) {
			return (
				<Redirect
					to={{
						pathname: '/orderSum',
						state: { name: user, admin: isAdmin },
					}}
				/>
			);
		}
	};

	const style = {
		h1: {
			marginBottom: '2em', marginTop: '-100px',
		},
		Button: {
			marginBottom: '1em',
		},
	};

	useEffect(() => {
		axios.get(config.server + 'api/user').then((res) => {
			const users = res.data;
			if (users) {
				setAllUser(users);
			}
		});
	});
	const checkLogin = async () => {
		const passedUser = await allUser.filter((u) => {
			return u.username == user && u.password == password;
		});
		if (passedUser[0]) {
			setIsAdmin(passedUser[0].isAdmin)
			if (passedUser[0].isAdmin) {
				setAdminRedirect(true);
			} else {
				setClientRedirect(true);
			}
		}
	};
	const userChange = (evt) => {
		setUser(evt.target.value);
	};
	const passwordChange = (evt) => {
		setPassword(evt.target.value);
	};
	return (
		<div>
			{renderAdminRedirect()}
			{renderClientRedirect()}
			<Grid
				textAlign="center"
				style={{ height: '100vh' }}
				verticalAlign="middle"
			>
				<Grid.Column style={{ maxWidth: 450 }}>
					<style>
						{`
        html, body {
        background-color: #C0C0C0 ;
      }
    `}
					</style>

					<Header //main header
						size="huge"
						style={style.h1}
						color="blue"
					>
						Log in to view your dashboard
					</Header>

					<Form size="large">
						<Segment stacked>
							<Form.Input //Username box
								placeholder="Username"
								onChange={userChange}
							/>

							<Form.Input //Password box
								placeholder="Password"
								type="password"
								onChange={passwordChange}
							/>

							<Button //login button
								fluid
								style={style.Button}
								size="medium"
								color="blue"
								onClick={checkLogin}
							>
								Login
							</Button>

							<Button //forgot password button
								color="grey"
								size="medium"
								href="/forgotPW"
							>
								Forgot Password?
							</Button>
						</Segment>
					</Form>
				</Grid.Column>
			</Grid>
		</div>
	);
}
export default Login;
