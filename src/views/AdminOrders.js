import React from "react";
import { Link } from "react-router-dom";

import {
    Button,
    Row,
    Col
} from "reactstrap";
import BooksOfOrder from "./booksOfOrder";

export default class AdminOrders extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            orders: []
        };
    }

    componentDidMount() {
        fetch(`https://bookstry20191122022423.azurewebsites.net/api/order/allpaid`)
            .then(response => response.json())
            .then(data => this.setState({ orders: data }));
    }

    splitString(myString) {
        let myItem = myString;
        let pieces = myItem.split("T");

        return pieces[0];
    }

    ViewDetails(myOrderId) {
        document.getElementById(myOrderId).style.display = "block";
    }


    hideDetails(myId) {
        document.getElementById(myId).style.display = "none";
    }

    render() {
        var { orders } = this.state;

        return (
            <>
                <Row style={{ borderBottom: "2px solid lightgrey",  paddingTop: "2%", color: "black" }}>
                    <Col md="2">
                        <h3><strong>Order Number</strong></h3>
                    </Col>
                    <Col md="2">
                        <h3><strong>Purchase Date</strong></h3>
                    </Col>
                    <Col md="2">
                        <h3><strong>Total Price</strong></h3>
                    </Col>
                    <Col md="2">
                        <h3><strong>Person ID</strong></h3>
                    </Col>
                    <Col md="4" style={{ textAlign: "right" }}>
                    </Col>
                </Row>
                {orders.map(item => (
                    <>
                        <Row style={{ marginTop: "5px", marginBottom: "10px", borderBottom: "2px solid lightgrey" }}>

                            <Col md="2" style={{ marginTop: "15px" }}>
                                <h5><strong>{item.orderId}</strong></h5>

                            </Col>
                            <Col md="2" style={{ marginTop: "15px" }}>
                                <h5>{this.splitString(item.purchaseDate)}</h5>
                            </Col>
                            <Col md="2" style={{ marginTop: "15px" }}>
                                <h5>€{item.totalPrice}</h5>
                            </Col>
                            <Col md="2" style={{ marginTop: "15px" }}>
                                <h5>{item.personId}</h5>
                            </Col>
                            <Col md="4" style={{ textAlign: "right" }}>
                                <Button className="btn-link" color="primary" type="button" style={{ display: "inline-block" }} onClick={() => this.ViewDetails(item.orderId)}>View Purchased Books</Button>
                            </Col>

                        </Row>
                        <Row id={item.orderId} style={{ display: "none", textAlign: "right" }}>
                                <Button style={{ marginTop: "0px", padding: "0px"}} className="btn-link" color="danger" type="button" onClick={() => this.hideDetails(item.orderId)}>Hide</Button>
                            
                                <BooksOfOrder orderId={item.orderId} />

                        </Row>

                    </>
                ))}
            </>
        );
    }
}