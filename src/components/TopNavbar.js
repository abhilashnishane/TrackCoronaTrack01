import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const TopNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Track Corona Track</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* <Form inline className="login-form">
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Input type="text" placeholder="Email" className="f14" onChange={this.changelEmail} />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Input type="password" placeholder="Password" className="f14" onChange={this.changelPassword} />
              </FormGroup>
              <Button className="f14 login-btn" onClick={this.handleLogin}>Login</Button>
            </Form> */}
            {/* <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem> */}
            
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default TopNavbar;
