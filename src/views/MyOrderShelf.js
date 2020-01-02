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
        fetch(`http://localhost:8000/api/order/orderhistory/${this.state.personId}`)
            .then(response => response.json())
            .then(data => this.setState({ ordersHistory: data }));
    }
    
    render(){
        var {ordersHistory} = this.state;
        return(
            <div>
                {ordersHistory.map(item => (
                            <Row id={item.orderId} style={{ marginTop: "5px", height: "120px", marginBottom: "10px", borderBottom: "2px solid lightgrey" }}>
                                
                                <Col md="4" style={{ marginTop: "15px" }}>
                                    <h3><strong>{item.orderId}</strong></h3>

                                </Col>
                                <Col md="3" style={{ marginTop: "15px" }}>
                                    <h3>{item.purchaseDate}</h3>
                                </Col>
                                <Col md="2" style={{ marginTop: "15px" }}>
                                    <h3>${item.TotalPrice}</h3>
                                </Col>

                            </Row>

                        ))}
            </div>
        );
    }
}