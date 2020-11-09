import React from "react";
import {Container} from 'semantic-ui-react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import adminHome from './Pages/adminHome';
import clientHome from './Pages/clientHome';
import orderSum from './Pages/orderSum';
import orderData from './Pages/orderData';
import forgotPW from './Pages/forgotPW';
import loginScreen from './Pages/loginScreen';

function App() {

  return (
    <Router>
      <Container>
          <Route exact path="/" component={loginScreen} />
          <Route exact path="/forgotPW" component={forgotPW} />
          <Route exact path="/adminHome" component={adminHome} />
          <Route exact path="/clientHome" component={clientHome} />
          <Route exact path="/orderSum" component={orderSum} />
          <Route exact path="/orderData" component={orderData} />
    </Container>
    </Router>
  );
}

export default App;