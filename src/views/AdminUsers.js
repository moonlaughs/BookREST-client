import React from "react";
import { Link } from "react-router-dom";

import {
    Button,
    Row,
    Col
} from "reactstrap";

export default class AdminUsers extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            persons: []
        };
    }

    componentDidMount() {
        fetch(`https://bookstry20191122022423.azurewebsites.net/api/person`)
            .then(response => response.json())
            .then(data => this.setState({ persons: data }));
    }



    ViewDetails(myId) {
        document.getElementById(myId).style.display = "block";
    }

    hideDetails(myId) {
        document.getElementById(myId).style.display = "none";
    }

    typeOfUser(myType) {
        if (myType === 1) {
            return ("user");
        }
        if (myType === 2) {
            return ("admin");
        }
    }

    deleteAccount(myPersonId) {
        if (window.confirm("Are you sure you want to delete your account?")) {
          fetch(
            `https://bookstry20191122022423.azurewebsites.net/api/person/delAccount/` + myPersonId,
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
        window.location.href = "/adminpanel";
      }

    render() {
        var { persons } = this.state;

        return (
            <>
                <Row style={{ paddingTop: "2%", borderBottom: "2px solid lightgrey", color: "black" }}>
                    <Col md="3">
                        <h3><strong>Full Name</strong></h3>
                    </Col>
                    <Col md="3">
                        <h3><strong>Username</strong></h3>
                    </Col>
                    <Col md="3">
                        <h3><strong>Email</strong></h3>
                    </Col>
                    <Col md="3"></Col>
                </Row>
                {persons.map(item => (
                    <>
                        <Row style={{ marginTop: "5px", marginBottom: "10px", borderBottom: "2px solid lightgrey" }}>
                            <Col md="3" style={{ marginTop: "15px" }}>
                                <h5>{item.fullName}</h5>
                            </Col>
                            <Col md="3" style={{ marginTop: "15px" }}>
                                <h5><strong>{item.username}</strong></h5>

                            </Col>
                            <Col md="3" style={{ marginTop: "15px" }}>
                                <h5>{item.email}</h5>
                            </Col>
                            <Col md="3" style={{ marginTop: "10px", textAlign: "right" }}>

                                <Button className="btn-link" color="primary" type="button" style={{ display: "inline-block" }} onClick={() => this.ViewDetails(item.personId)}>View Details</Button>

                                <Button className="btn-link" color="danger" type="button" style={{ display: "inline-block" }} onClick={() => this.deleteAccount(item.personId)}>Remove</Button>



                            </Col>

                        </Row>
                        <Row id={item.personId} style={{ display: "none", textAlign: "left" }}>
                            <Col md="3" style={{ display: "inline-block", color: "black" }}>
                                <label><strong>Password:</strong></label> <label id="myInput">{item.pass}</label>

                            </Col><Col md="3" style={{ display: "inline-block", color: "black" }}>
                                <h5><strong>Type of the User:</strong> {this.typeOfUser(item.type)}</h5>
                            </Col>
                            <Col md="6" style={{ display: "inline-block", textAlign: "right" }}>
                                <Button style={{ marginTop: "0px", padding: "0px" }} className="btn-link" color="danger" type="button" onClick={() => this.hideDetails(item.personId)}>Hide</Button>
                            </Col>
                        </Row>
                    </>
                ))
                }
            </>
        );
    }
}