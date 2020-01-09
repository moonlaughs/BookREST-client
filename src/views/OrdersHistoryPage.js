import React, { Component } from "react";

import {
    Row,
    Col,
    Button
} from "reactstrap";

import HomePageNavbar from "components/Navbars/HomePageNavbar.js";
import HomePageHeader from "components/Headers/HomePageHeader.js";
import Footer from "components/Footers/Footer.js";

export default class OrdersHistoryPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: [],
        };
    }



    componentDidMount() {
        fetch(`https://bookstry20191122022423.azurewebsites.net/api/order/orderhistory/${localStorage.getItem("personId")}`)
            .then(response => response.json())
            .then(data => this.setState({ orders: data }));
    }

    splitString(myString){
        let myItem = myString;
        let pieces = myItem.split("T");

        return pieces[0];
    }

    render() {
        var { orders } = this.state;

        if (orders.length === 0) {

            return (
                <div>
                    <HomePageNavbar />
                    <HomePageHeader />
                    <div style={{ marginLeft: "40%", marginTop: "2%" }}>
                        <h3>No History of Orders</h3>
                    </div>
                    <Footer />
                </div>
            )
        }
        else {
            return (
                <div>
                    <HomePageNavbar />
                    <HomePageHeader />
                    <div className="main" style={{ marginLeft: "20%", marginRight: "20%" }}>
                        <h3><strong>Your History of Orders</strong></h3>
                            <Row style={{ borderBottom: "2px solid lightgrey", marginTop: "10px" }}>
                                <Col md="3">
                                    <h5>Order Id Number</h5>
                                </Col>
                                <Col md="5">
                                    <h5>Purchase Date</h5>
                                </Col>
                                <Col md="2">
                                    <h5>Total Price</h5>
                                </Col>
                            </Row>
                            {orders.map(item => (
                                <Row id={item.orderId} style={{ marginTop: "5px", marginBottom: "10px", borderBottom: "2px solid lightgrey" }}>

                                    <Col md="3" style={{ marginTop: "15px" }}>
                                        <h5><strong>{item.orderId}</strong></h5>

                                    </Col>
                                    <Col md="5" style={{ marginTop: "15px" }}>
                                        
                            <h5>{this.splitString(item.purchaseDate)}</h5>
                                    </Col>
                                    <Col md="2" style={{ marginTop: "15px" }}>
                                        <h5>€{item.totalPrice}</h5>
                                    </Col>

                                </Row>

                            ))}

                    </div>
                    <Footer />
                </div>
            );
        }
    }
}