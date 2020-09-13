import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';  
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

let root_url = 'http://192.168.1.3/codes/react-experiments/03_Go_Go_Jump_react_web/backend/';

export default class InnerNavbar extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.logout = this.logout.bind(this);

    this.state = {
      isOpen: false,
      auth_success: true
    };
  }
  toggle() {
    this.setState({
        isOpen: !this.state.isOpen
    });
  }

  logout() {
    
    // firebase.auth().signOut().then(function() {
    //   // Sign-out successful.
    // }).catch(function(error) {
    //   // An error happened.
    // });

  }

  render() {

    // if (this.state.auth_success === false) {
    //   return <Redirect to='/' />
    // }

    return(
      <div>
        <Navbar color="light" light expand="md" className="header fixed-top">
          <NavbarBrand href="/home" className="" style={{color: '#333'}}>Track Corona Track</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {/* <NavItem>
                  <Link to="" className="nav-link" style={{color: 'aqua'}}>Shopping</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link">|</Link>
                </NavItem>
                <NavItem>
                  <Link to="/home" className="nav-link">Home</Link>
                </NavItem>
                <NavItem>
                  <Link to="/explore" className="nav-link">Explore</Link>
                </NavItem>
                <NavItem>
                  <Link to="/events" className="nav-link">Events</Link>
                </NavItem> */}
                {/* <NavItem>
                  <Link to="/business" className="nav-link">Business</Link>
                </NavItem> */}
                {/* <NavItem>
                  <Link to="/shopping" className="nav-link">Shopping</Link>
                </NavItem> */}
                {/* <NavItem>
                  <Link to="/people" className="nav-link">People</Link>
                </NavItem> */}
                {/* <NavItem>
                    <Link to="/friends" className="nav-link">Friends</Link>
                </NavItem>
                <NavItem>
                    <Link to="/notifications" className="nav-link">Notifications</Link>
                </NavItem>
                <NavItem>
                    <Link to="/chat" className="nav-link">Chat</Link>
                </NavItem> */}
                {/* <NavItem>
                  <Link to="/profile" className="nav-link">Profile</Link>
                </NavItem> */}
                {/* <div onClick={this.logout}>Logout</div> */}
                <Button outline color="primary" onClick={this.logout}>Logout</Button>
                {/* <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    More
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Groups
                    </DropdownItem>
                    <DropdownItem>
                      Public Pages
                    </DropdownItem>
                    <DropdownItem onClick={this.logout}>
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown> */}
              </Nav>
          </Collapse>
        </Navbar>             

      </div>
    )
  }
}



function setCookie(name,value,days) {
	var expires = "";
	if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days*24*60*60*1000));
			expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)===' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
function eraseCookie(name) {   
	document.cookie = name+'=; Max-Age=-99999999;';  
}