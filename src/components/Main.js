import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import Home from '../pages/Home';
import Home2 from '../pages/Home2';

import Home3 from '../pages/Home3';


export default class Main extends React.Component {
  render() {
    return(
      <Router>
        <div>

          {/* <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home}/> */}
          <Route exact path="/" component={Home}/>
          <Route exact path="/home2" component={Home2}/>

          <Route exact path="/home3" component={Home3}/>

        </div>
      </Router>
    )
  }
}