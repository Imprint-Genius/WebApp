import React, { useState } from "react";
import {Container} from 'semantic-ui-react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import adminHome from '.Pages/adminHome';

function App() {

  return (
    <Router>
      <Container>
          <MenuBar />
          <Route exact path="/" component={loginScreen} />
          <Route exact path="/forgotPassword" component={forgotPW} />
          <Route exact path="/adminHome" component={adminHome} />
          <Route exact path="/clientHome" component={clientHome} />
          <Route exact path="/orderSum" component={orderSum} />
          <Route exact path="/orderData" component={orderData} />
    </Container>
    </Router>
  );
}

export default App;
