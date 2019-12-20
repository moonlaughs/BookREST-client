import React from "react";

import {
  Input,
  Button,
  InputGroupText,
  InputGroupAddon,
  InputGroup
} from "reactstrap";

export default class SignupPage extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["fullName"] = "";
      fields["username"] = "";
      fields["email"] = "";
      fields["pass"] = "";
      fields["pass2"] = "";
      this.setState({ fields: fields });
  //    alert("Form submitted");
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["fullName"]) {
      formIsValid = false;
      errors["fullName"] = "*Please enter your full name.";
    }

    if (typeof fields["fullName"] !== "undefined") {
      if (!fields["fullName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["fullName"] = "*Please enter alphabetal characters only.";
      }
    }

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabetical characters only.";
      }
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email.";
    }

    if (typeof fields["email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email.";
      }
    }

    if (!fields["pass"]) {
      formIsValid = false;
      errors["pass"] = "*Please enter your password.";
    }

    if (typeof fields["pass"] !== "undefined") {
      if (
        !fields["pass"].match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        formIsValid = false;
        errors["pass"] =
          "*Password must contain at least 8 characters, at least one UPPERCASE and lowercase letter, at least one number and at least one symbol from @#$%&.";
      }
    }

    if (!fields["pass2"]) {
      formIsValid = false;
      errors["pass2"] = "*Please enter your password.";
    }

    if (typeof fields["pass2"] !== "undefined") {
      if (
        !fields["pass2"].match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        formIsValid = false;
        errors["pass2"] =
          "*Password must contain at least 8 characters, at least one UPPERCASE and lowercase letter, at least one number, at least one symbol from @#$%& and it should match the password above.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  signup() {
    const url = "https://bookstry20191122022423.azurewebsites.net/api/person";
    const data = {
      fullName: document.getElementById("fullName").value,
      email: document.getElementById("email").value,
      username: document.getElementById("username").value,
      pass: document.getElementById("pass").value,
      pass2: document.getElementById("pass2").value
    };

     if (data.pass.value === data.pass2.value) {
      fetch(url, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json"
        }
      });
      console.log(JSON.stringify(data));
      alert("You successfully created an account");
      window.location.reload();
     }
     else if (data.pass.value !== data.pass2.value) {
       alert("Make sure that your passwords match.");
     }
  }

  register() {
    var validAll = this.validateForm();

    if (validAll === true) {
      this.signup();
    } else if (validAll !== true) {
      alert("Something went wrong :/");
    } else {
      alert("Please fill in the fields.");
    }
  }

  render() {
    return (
      <div>
        <div>
          <h3
            style={{
              marginBottom: "30px",
              textAlign: "center"
            }}
          >
            Register
          </h3>

          <form
            id="form"
            method="post"
            className="register-form"
            name="userRegistrationForm"
            onSubmit={this.submituserRegistrationForm}
            style={{ width: "250px" }}
          >
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="nc-icon nc-single-02" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Full name"
                id="fullName"
                type="text"
                name="fullName"
                value={this.state.fields.fullName}
                onChange={this.handleChange}
              />
            </InputGroup>
            <div className="errorMsg">{this.state.errors.fullName}</div>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="nc-icon nc-email-85" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Email address"
                id="email"
                type="text"
                name="email"
                value={this.state.fields.email}
                onChange={this.handleChange}
              />
            </InputGroup>
            <div className="errorMsg">{this.state.errors.email}</div>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="nc-icon nc-single-02" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Username"
                id="username"
                type="text"
                name="username"
                value={this.state.fields.username}
                onChange={this.handleChange}
              />
            </InputGroup>
            <div className="errorMsg">{this.state.errors.username}</div>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="nc-icon nc-key-25" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Password"
                id="pass"
                type="password"
                name="pass"
                value={this.state.fields.pass}
                onChange={this.handleChange}
              />
            </InputGroup>
            <div className="errorMsg">{this.state.errors.pass}</div>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="nc-icon nc-key-25" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Confirm password"
                type="password"
                id="pass2"
                name="pass2"
                value={this.state.fields.pass2}
                onChange={this.handleChange}
              />
            </InputGroup>
            <div className="errorMsg">{this.state.errors.pass2}</div>

            <Button
            block
              className="btn-round"
              color="primary"
              type="submit"
              onClick={this.register.bind(this)}
            >
              Sign up
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
