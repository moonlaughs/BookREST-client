import React, { Component } from "react";

import {
    Row,
    Col,
    Button
} from "reactstrap";

import HomePageNavbar from "components/Navbars/HomePageNavbar.js";
import HomePageHeader from "components/Headers/HomePageHeader.js";
import Footer from "components/Footers/Footer.js";
import HomePage from "./HomePage";

export default class CartPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: [],
            orderId: props.match.params.id,
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch(`http://localhost:8000/api/BookOrder/personOrder/1`)//${this.state.orderId}
            .then(response => response.json())
            .then(data => this.setState({ orders: data, isLoaded: true, }));
    }

    render() {
        var { isLoaded, orders } = this.state;

        if (!isLoaded) {
            return <div>loading...</div>
        }
        else {
            return (
                <div>
                    <HomePageNavbar />
                    <HomePageHeader />
                    <div className="main" style={{marginLeft: "20%", marginRight: "20%"}}>
                        <Row style={{ paddingTop: "2%", borderBottom: "2px solid lightgrey",  }}>
                            <Col md="8">
                                <h3>Item</h3>
                            </Col>
                            <Col md="2">
                                <h3>Price</h3>
                            </Col>
                            <Col md="2">
                            </Col>
                        </Row>
                        {orders.map(item => (
                            <Row id={item.bookId} style={{padding: "5px", height: "120px", marginBottom: "10px", borderBottom: "2px solid lightgrey"}}>     {/*in the future change the id to order id or sth like that*/}
                                <Col md="1">
                                    <image src={item.coverPhoto} style={{ width: "80px", height: "110px" }} />
                                </Col>
                                <Col md="3" style={{marginTop: "15px"}}>
                                    <h3><strong>{item.title}</strong></h3>
                                    
                                </Col>
                                <Col md="4" style={{marginTop: "15px"}}>
                                <h3>{item.author}</h3>
                                </Col>
                                <Col md="2" style={{marginTop: "15px"}}>
                        <h3>${item.price}</h3>
                                </Col>
                                <Col md="2" style={{marginTop: "30px"}}>
                                    <Button className="btn-round mr-1" color="neutral" type="button" style={{color: "red"}}>Remove</Button>
                                </Col>

                            </Row>

                        ))}
                        <Row>
                            <Col md="2" style={{marginTop: "30px"}}>
                                <Button href='/home-page' color="primary" type="button" style={{whiteSpace: "nowrap"}} size="lg">Continue shopping</Button>
                            </Col>
                            <Col md="4"></Col>
                            <Col md="2" style={{marginTop: "15px"}}>
                        <h3 style={{textAlign: "right", fontWeight: "bold"}}>Total:</h3>
                            </Col>
                            <Col md="2" style={{marginTop: "15px"}}>
                        <h3 style={{fontWeight: "bold"}}>$200</h3>
                            </Col>
                            <Col md="2" style={{marginTop: "30px"}}>
                                <Button color="primary" size="lg">Checkout</Button>
                            </Col>
                        </Row>

                    </div>
                    <Footer />
                </div>
            );
        }
    }
}