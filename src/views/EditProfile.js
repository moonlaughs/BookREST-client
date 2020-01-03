import React from "react";
import ChangePasswordButton from "views/ChangePasswordButton.js";
import DeleteAccountButton from "views/DeleteAccountButton.js";
import { Card, Input, Button } from "reactstrap";

export default class EditProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: "",
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
      fields["email"] = "";
      this.setState({ fields: fields });
      //alert("Form submitted");
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (typeof fields["fullName"] !== "undefined") {
      if (!fields["fullName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["fullName"] = "*Please enter alphabetal characters only.";
      }
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

  editedInfo() {
    const newData = {
      fullName: document.getElementById("fullName").value,
      email: document.getElementById("email").value
    };
    fetch(`https://bookstry20191122022423.azurewebsites.net/api/person/` + localStorage.getItem("personId"),
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newData)
      }
    );

    alert("Successfuly applied changes!");
    window.location.reload();
  }

  confirmEditInfo() {
    var validAll = this.validateForm();

    if (validAll === true) {
      this.editedInfo();
    } else if (validAll !== true) {
      alert("Something went wrong :/");
    } else {
      alert("Please fill in the fields.");
    }
  }

  render() {
    var { person } = this.state;

    return (
      <div>
        <Card className="card-register">
          <form
            id="form"
            method="post"
            name="userRegistrationForm"
            onSubmit={this.submituserRegistrationForm}
            style={{ width: "250px" }}
          >
            <h6>Full name</h6>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              defaultValue={person.fullName}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.fullName}</div>

            <h6>Email</h6>
            <Input
              type="text"
              id="email"
              name="email"
              defaultValue={person.email}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.email}</div>

            <ChangePasswordButton />
            <DeleteAccountButton />

            <Button
              block
              type="submit"
              color="success"
              className="btn-round"
              // size="sm"
              onClick={this.confirmEditInfo.bind(this)}
            >
              Save changes
            </Button>
          </form>
        </Card>
      </div>
    );
  }
}
