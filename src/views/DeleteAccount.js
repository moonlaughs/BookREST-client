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

  firstDelete() {
    fetch(
      `https://bookstry20191122022423.azurewebsites.net/api/person/firstDel/` +
        localStorage.getItem("personId"),
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      }
    );
  }

  secondDelete() {
    fetch(
      `https://bookstry20191122022423.azurewebsites.net/api/person/secondDel/` + localStorage.getItem("personId"),
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      }
    );
  }

  DeleteAccounts() {
    var firstDel = this.firstDelete();
    if (firstDel === true) {
      this.secondDelete();
    }    
    else if (firstDel !== true) 
    alert("Something when wrong")
  }

  close() {
    window.location.href = `/tabs`;
  }

  render() {
     var { person } = this.state;
    return (
      <Card className="card-register">
        <p>
          By clicking "Delete account permanately", you aggree to the following:
          Your account and all related orders and books will be deleted. Keep in
          mind that if you do so, you will no longer have access to your account
          and purchases. Your account cannot be restored. {person.personId}
        </p>
        <Button block color="danger" type="sumbit" onClick={this.DeleteAccounts.bind(this)}>
          Delete account permanately
        </Button>
        <Button block color="secondary" type="submit" onClick={this.close}>
          Cancel
        </Button>
      </Card>
    );
  }
}
