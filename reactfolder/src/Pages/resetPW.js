import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import config from '../config.js';
import { Redirect } from 'react-router';
import {
	Grid,
	Header,
	Form,
	Segment,
	Button,
} from 'semantic-ui-react';

function ResetPW() {
	const [newPW, setPW] = useState();
	const [confirmPW, setconfirmPW] = useState();
	const [user, setUser] = useState();
	const [id, setId] = useState();
	const [goBack, setGoBack] = useState(false);
	const homeRedirect = () => {
		if (goBack) {
			return (
				<Redirect
					to={{
						pathname: '/',
					}}
				/>
			);
		}
	};
	const firstPW = (evt) => {
		setPW(evt.target.value);
	};
	const finalPW = (evt) => {
		setconfirmPW(evt.target.value);
	};

	useEffect(() => {
		const url = window.location.pathname.split('/');
		const id = url[url.length - 1];
		setId(id);
		axios.get(config.server + 'api/user/get/' + id).then((res) => {
			const u = res.data;
			setUser(u);
		});
	});

	const checkPW = async () => {
		if (newPW !== confirmPW) {
			alert('Error: Passwords must match');
		} else {
			//confirm the password
			console.log(newPW);
			await axios.put(config.server + 'api/user/update/' + id, {
				username: user.username,
				password: newPW,
				email: user.email,
				isAdmin: user.isAdmin,
				orderIDs: user.orderIDs,
			});
			alert('we did it reddit');
			setGoBack(true);
		}
	};

	const style = {
		h1: {
			marginBottom: '3em',
		},
	};
	return (
		<div>
			{homeRedirect()}
			<Grid
				textAlign="center"
				style={{ height: '100vh' }}
				verticalAlign="middle"
			>
				<Grid.Column style={{ maxWidth: 650 }}>
					<style>
						{`
            html, body {
            background-color: #C0C0C0 ;
          }
        `}
					</style>

					<Form size="large">
						<Header //main header
							as="h1"
							color="blue"
							style={style.h1}
							textAlign="center"
						>
							Please enter your new password
						</Header>
					</Form>

					<Form size="large">
						<Segment stacked>
							<Form.Input //email input
								placeholder="New password"
								type="password"
								onChange={firstPW}
							/>
							<Form.Input
								placeholder="Confirm password"
								type="password"
								onChange={finalPW}
							/>

							<Button //Go button
								color="blue"
								onClick={checkPW}
							>
								Reset Password
							</Button>
						</Segment>
					</Form>
				</Grid.Column>
			</Grid>
		</div>
	);
}
export default ResetPW;
