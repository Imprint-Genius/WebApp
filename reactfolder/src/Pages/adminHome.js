import React from 'react';
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
import { Redirect } from 'react-router';
import config from '../config.js';


//TODO: Actually pass through the 'admin' variable, figure out search UI, adjust spacing

import axios from 'axios';

export default class storeData extends React.Component {
	state = {
		stores: [],
		clicked: false,
		goBack: false,
		user: '',
		logoutClicked: false,
	};

	componentDidMount() {
		axios.get(config.server + 'api/user').then((res) => {
			const stores = res.data;
			this.setState({ stores });
		});
	}
	renderClientRedirect = () => {
		if (this.state.clicked) {
			return (
				<Redirect
					to={{
						pathname: '/orderSum',
						state: { name: this.state.user, admin: this.props.location.state.admin },
					}}
				/>
			);
		}
		else if (this.state.goBack) {
			if(this.props.location.state.admin){
				return (
					<Redirect
						to={{
							pathname: '/adminHome',
							state: { name: this.props.location.state.name, admin: this.props.location.state.admin },
						}}
					/>
				);
			}	
		}
		else if (this.state.logoutClicked) {
			return (
			<Redirect
				to={{
					pathname: '/',
				}}
			/>
			);
		}
	};

	backToHome = (u) => {
		this.setState({ goBack: true, user: u });
	};

	clickedCard = (u) => {
		this.setState({ clicked: true, user: u });
	};

	logout = () => {
		this.setState({ logoutClicked: true, user: '' });
	};

	render() {
		return (
			<div>
				{this.renderClientRedirect()}
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

				<Menu.Menu position='right'>
					<Menu.Item
					name='Logout'
					active={this.active === 'Logout'}
					onClick={this.logout}
					/>
					</Menu.Menu>
				</Menu>
			</div>

				<Container>
					<style>
						{`
          html, body {
          background-color: #C0C0C0 ;
        }
      `}
					</style>

					<Grid
						textAlign="center"
						style={{ height: '50vh' }}
						verticalAlign="middle"
					>
						<Grid.Column style={{ maxWidth: 10050 }}>
							<Header //main header
								as="h1"
								color="blue"
								textAlign="center"
								style={{ marginTop: 150, marginBottom: 75 }}
							>
								Welcome
							</Header>

							<Card.Group itemsPerRow={2}>
								{this.state.stores.map((store) =>
									store.isAdmin ? null : (
										<Card
											color="blue"
											onClick={() => this.clickedCard(store.username)}
										>
											<Card.Content>
												<Card.Header>{store.username}</Card.Header>
												<Card.Meta>
													<span className="date">
														Placeholder for date joined
													</span>
												</Card.Meta>
												<Card.Description>
													Placeholder for store owner names
												</Card.Description>
											</Card.Content>
										</Card>
									)
								)}
							</Card.Group>
						</Grid.Column>
					</Grid>
				</Container>
			</div>
		);
	}
}
