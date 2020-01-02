import React, { Component } from "react";

import {
    CardTitle,
    Row,
    Col,
    Button,
    Card,
    CardBody,
} from "reactstrap";

export default class MyOrderShelf extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ordersHistory: [],
            personId: localStorage.getItem('personId'),
        };
    }

    componentDidMount() {
        fetch(`https://bookstry20191122022423.azurewebsites.net/api/order/orderhistory/${this.state.personId}`)
            .then(response => response.json())
            .then(data => this.setState({ ordersHistory: data }));
    }
    
    render(){
        var {ordersHistory} = this.state;
        return(
            <div>
                <Row>
                    <Col md="3">
                        <h3>Order Number</h3>
                    </Col>
                    <Col md="5">
                        <h3>Purchase Date</h3>
                    </Col>
                    <Col md="2">
                        <h3>Total Price</h3>
                    </Col>
                </Row>
                {ordersHistory.map(item => (
                            <Row id={item.orderId} style={{ marginTop: "5px", height: "120px", marginBottom: "10px", borderBottom: "2px solid lightgrey" }}>
                                
                                <Col md="3" style={{ marginTop: "15px" }}>
                                    <h3><strong>{item.orderId}</strong></h3>

                                </Col>
                                <Col md="5" style={{ marginTop: "15px" }}>
                                    <h3>{item.purchaseDate}</h3>
                                </Col>
                                <Col md="2" style={{ marginTop: "15px" }}>
                                    <h3>${item.totalPrice}</h3>
                                </Col>

                            </Row>

                        ))}
            </div>
        );
    }
}