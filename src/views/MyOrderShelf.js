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
                <Row style={{borderBottom: "2px solid lightgrey"}}>
                    <Col md="3">
                        <h5>Order Number</h5>
                    </Col>
                    <Col md="5">
                        <h5>Purchase Date</h5>
                    </Col>
                    <Col md="2">
                        <h5>Total Price</h5>
                    </Col>
                </Row>
                {ordersHistory.map(item => (
                            <Row id={item.orderId} style={{ marginTop: "5px", marginBottom: "10px", borderBottom: "2px solid lightgrey" }}>
                                
                                <Col md="3" style={{ marginTop: "15px" }}>
                                    <h5><strong>{item.orderId}</strong></h5>

                                </Col>
                                <Col md="5" style={{ marginTop: "15px" }}>
                                    <h5>{item.purchaseDate}</h5>
                                </Col>
                                <Col md="2" style={{ marginTop: "15px" }}>
                                    <h5>${item.totalPrice}</h5>
                                </Col>

                            </Row>

                        ))}
            </div>
        );
    }
}