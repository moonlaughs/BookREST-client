import React from "react";
import { Card, Button } from "reactstrap";

export default class DeleteAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: ""
    };
  }

  componentDidMount() {
    fetch(
      `https://bookstry20191122022423.azurewebsites.net/api/person/` +
        localStorage.getItem("personId")
    )
      .then(response => response.json())
      .then(data => this.setState({ person: data }));
  }

  deleteAccount() {
    if (window.confirm("Are you sure you want to delete your account?")) {
      fetch(
        `https://bookstry20191122022423.azurewebsites.net/api/person/delAccount/` + localStorage.getItem("personId"),
        {
          method: "DELETE",
          header: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }
      );
    } else {
      console.log("cancelled");
    }
    window.location.href = "/home-page";
  }

  close() {
    window.location.href = `/tabs`;
  }

  render() {

    return (
      <Card className="card-register">
        <p style={{marginBottom: "50px"}}>
          By clicking "Delete account permanately", you aggree to the following:
          Your account and all related orders and books will be deleted. Keep in
          mind that if you do so, you will no longer have access to your account
          and purchases. Your account cannot be restored.
        </p>
        <Button block color="danger" type="sumbit" onClick={this.deleteAccount}>
          Delete account permanately
        </Button>
        <Button block color="secondary" type="submit" onClick={this.close}>
          Cancel
        </Button>
      </Card>
    );
  }
}
