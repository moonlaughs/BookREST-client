import React from "react";

import {
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button
} from "reactstrap";

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //  person: [],
      username: "",
      password: ""
    };

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onUsernameChange = e => {
    this.setState({ username: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  login = () => {
    const { username, password } = this.state;
    // console.log(username);
    // console.log(password);
    fetch(
      "https://bookstry20191122022423.azurewebsites.net/api/person/login/" + username + "/" + password
    )
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response !== null) {
          if (response.type === 1) alert("Hello");
          else if (response.type === 2) alert("Hello admin");
        }
      })
      .catch(error => {
        console.log(error);
        alert("Wrong username or password");
      });
  };

  render() {
    return (
      <div>
        {/* <div>
          <HomePageNavbar />
    </div> */}
              <h3
               style={{
                marginBottom: "30px",
                textAlign: "center"
              }}
              >Welcome</h3>
              <Form className="register-form"
              style={{width: "250px"}}
              >
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="nc-icon nc-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Username"
                    type="username"
                    id="user"
                    onChange={this.onUsernameChange}
                  />
                </InputGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="nc-icon nc-key-25" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    id="password"
                    onChange={this.onPasswordChange}
                  />
                </InputGroup>
                <Button
                style={{marginTop: "50px"}}
                  block
                  className="btn-round"
                  color="primary"
                  type="button"
                  onClick={this.login}
                >
                  Log in
                </Button>
              </Form>
      </div>
    );
  }
}
