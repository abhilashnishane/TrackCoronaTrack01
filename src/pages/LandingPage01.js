import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import TopNavbar from '../components/TopNavbar';

// import firebaseui from "firebaseui";

class LandingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    // check if login cookie already exists
  }

  changeInput = (e) => {
    this.setState({[e.target.name]: e.target.value});
    // console.log(this.state[e.target.name]);
  }

  handleCreateAccount(e) {
    e.preventDefault();

    const { fname, lname, email, password } = this.state ;
  }

  render () {
    return (
      <div>
        <TopNavbar />
        <Container fluid>
          <Row>
            <Col md={8}></Col>

            <Col md={4}>
              <div className="create-c">
                <FormGroup>
                  <Label for="fname">First Name</Label>
                  <Input type="text" name="fname" id="fname" placeholder="" onChange={this.changeInput} />
                </FormGroup>
                <FormGroup>
                  <Label for="lname">Last Name</Label>
                  <Input type="text" name="lname" id="lname" placeholder="" onChange={this.changeInput} />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" name="email" id="email" placeholder="" onChange={this.changeInput} />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" name="password" id="password" placeholder="" onChange={this.changeInput} />
                </FormGroup>
                <Button color="primary" block onClick={this.handleCreateAccount}>Create Account</Button>
              </div>
            </Col>

          </Row>
        </Container>
      </div>
    );
  }
}

export default LandingPage;