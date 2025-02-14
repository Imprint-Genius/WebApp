import React from 'react';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import adminHome from './Pages/adminHome';
import orderSum from './Pages/orderSum';
import forgotPW from './Pages/forgotPW';
import loginScreen from './Pages/loginScreen';
import pdf from './Pages/pdf';
import resetPW from './Pages/resetPW';


function App() {
	return (
		<Router>
			<Container>
				<Route exact path="/" component={loginScreen} />
				<Route exact path="/forgotPW" component={forgotPW} />
				<Route exact path="/adminHome" component={adminHome} />
				<Route exact path="/orderSum" component={orderSum} />
				<Route exact path="/pdf" component={pdf} />
				<Route exact path="/resetPW/*" component={resetPW} />

			</Container>
		</Router>
	);
}

export default App;
