import Footer from "components/Footers/Footer.js";
import React from "react";

import {
  Container,
  Card,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Col,
  Button
} from "reactstrap";

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    //  person: [],
      username: '',
      password: ''
    };

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);

  }
  
    onUsernameChange = (e) => {
      this.setState({ username: e.target.value });
    }

    onPasswordChange = (e) => {
      this.setState({ password: e.target.value });
    }

  login = () => {
    const { username, password } = this.state;
    // console.log(username);
    // console.log(password);
    fetch("https://bookstry20191122022423.azurewebsites.net/api/person/login/" + username + "/" + password)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response !== null) {
          if (response.type === 1)
            alert ("Hello");
            else
              alert ("Wrong username or password");
        }
      })
      .catch(error => {
        console.log(error);
        alert ("Something went wrong :/");
      });
  }

  render() {

    return (
      <div>
       {/* <div>
          <HomePageNavbar />
    </div> */}

        <div className="main-container" style={{ marginTop: "100px" }}>
          <Col md="12">
            <Container style={{marginBottom: "185px"}}>
                <Col className="mx-auto" lg="4" md="6">
                  <Card className="card-register">
                    <h3 className="title mx-auto">Welcome</h3>
                    <Form className="register-form">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="username"
                          type="username"
                          id="username"
                          onChange={this.onUsernameChange}
                        />
                      </InputGroup>
                      <InputGroup
                       style={{
                        marginBottom: "50px"
                      }}>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-key-25" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="password"
                          type="password"
                          id="password"
                          onChange={this.onPasswordChange}
                        />
                      </InputGroup>
                      <Button
                        block
                        className="btn-round"
                        color="primary"
                        type="button"
                      >
                        Log in
                      </Button>
                      <Button className="btn-link" 
                      style={{margin: "15px"}}
               //       routerLink="./SignupPage.js" //think about this
                      >
                        Don't have an account yet?
                      </Button>
                    </Form>
                  </Card>
                </Col>
            </Container>
          </Col>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
