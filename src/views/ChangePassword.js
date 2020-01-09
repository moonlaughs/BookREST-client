import React from "react";
import { Input, Card, Button } from "reactstrap";

export default class ChangePassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: "",
      fields: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
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
      fields["pass"] = "";
      fields["conPass"] = "";
      this.setState({ fields: fields });
      //alert("Form submitted");
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["pass"]) {
      formIsValid = false;
      errors["pass"] = "*Please enter your password.";
    }

    if (typeof fields["pass"] !== "undefined") {
      if (
        !fields["pass"].match(
          /^.*(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/
        )
      ) {
        formIsValid = false;
        errors["pass"] =
          "*Password must contain at least 6 characters, at least one UPPERCASE and lowercase letter and at least one number.";
      }
    }

    if (typeof fields["pass2"] !== "undefined") {
      if (
        !fields["pass2"].match(
          /^.*(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/
        )
      ) {
        formIsValid = false;
        errors["pass2"] =
          "*Password must contain at least 6 characters, at least one UPPERCASE and lowercase letter, at least one number and it should match the password above.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  componentDidMount() {
    fetch(
      `https://bookstry20191122022423.azurewebsites.net/api/person/` +
        localStorage.getItem("personId")
    )
      .then(response => response.json())
      .then(data => this.setState({ person: data }));
  }

  ChangePassword() {
    const newData = {
      pass: document.getElementById("pass").value,
      conPass: document.getElementById("conPass").value
    };
    if (newData.pass === newData.conPass) {
      fetch(
        `https://bookstry20191122022423.azurewebsites.net/api/person/passChange/` +
          localStorage.getItem("personId"),
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newData)
        }
      );
    }
    alert("Successfuly applied changes!");
    window.location.reload();
  }

  confirmChangePass() {
    var validAll = this.validateForm();

    if (validAll === true) {
      this.ChangePassword();
    } else if (validAll !== true) {
      alert("Something went wrong :/");
    } else {
      alert("Please fill in the fields.");
    }
  }

  render() {
    var { person } = this.state;

    return (
      <Card className="card-register">
       
        <h6>Old password</h6>
        <Input className="passInput"
          type="password"
          id="oldPass"
          name="oldPass"
          defaultValue={person.pass}
      />  

        <h6>New password</h6>
        <Input className="passInput"
          type="password"
          placeholder="••••••••"
          id="pass"
          name="pass"
          value={this.state.pass}
          onChange={this.handleChange}
        />
        <div className="errorMsg">{this.state.errors.pass}</div>

        <h6>Confirm new password</h6>
        <Input
          type="password"
          placeholder="••••••••"
          id="conPass"
          name="conPass"
          value={this.state.conPass}
          onChange={this.handleChange}
          style={{marginBottom: "50px"}}
        />
        <div className="errorMsg">{this.state.errors.pass2}</div>

        <Button
          block
          type="submit"
          color="success"
          onClick={this.confirmChangePass.bind(this)}
        >
          Change password
        </Button>
      </Card>
    );
  }
}
