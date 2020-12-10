import React from 'react';
import { useState, useEffect } from 'react';
import config from '../config.js';
import axios from 'axios';
import Mailgun from 'mailgun-js';
import {
	Grid,
	Header,
	Form,
	Segment,
	Button,
} from 'semantic-ui-react';

//TODO: actually get their email and send them an automated message... TBH this sounds very hard for us to do

function ForgotPW() {
	const [open, setOpen] = React.useState(false);
	const [email, setEmail] = useState();
	const [user, setUser] = useState();
	const emailChange = (evt) => {
		setEmail(evt.target.value);
	};

	const sendMessage = async () => {
		await axios
			.get(config.server + 'api/user/email/' + email)
			.then((res) => {
				const u = res.data;
				setUser(u[0]._id);
			});

		//console.log(user.id);
		const mailgun = require('mailgun-js');
		const api_key =
			'7bcb7fed961e2e08a8586fea841b355e-4879ff27-23202e74';
		const domain =
			'sandbox94e8fd88ed694d72b24731db76855093.mailgun.org';
		const mg = mailgun({ apiKey: api_key, domain: domain });
		console.log(user);
		const data = {
			from: 'Imprint Genius <Austin4th@Gmail.com>',
			to: email,
			subject: 'Password Reset (Email test)',
			text:
				'We received a request to reset your password from ImprintGenius.' +
				' If you did not request a new password please ignore this message.' +
				'\nOtherwise, click the following link to reset your' +
				'passsword.\nhttp://localhost:3000/resetPW/' +
				user,
		};
		mg.messages().send(data, function (error, body) {
			console.log(body);
		});
		alert('An email has been sent.');
	};
	const style = {
		h1: {
			marginBottom: '3em',
		},
	};
	return (
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
						Trouble logging in? Enter your email and we’ll send a link
						to reset your password
					</Header>
				</Form>

				<Form size="large">
					<Segment stacked>
						<Form.Input //email input
							placeholder="Email"
							type="Email"
							onChange={emailChange}
						/>

						<Button //Go button
							color="blue"
							onClick={sendMessage}
							//href='whatever_link_we_decide'
						>
							Reset Password
						</Button>
					</Segment>
				</Form>
			</Grid.Column>
		</Grid>
	);
}
export default ForgotPW;
