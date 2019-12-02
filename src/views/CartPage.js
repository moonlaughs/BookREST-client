import React, { Component } from "react";

import {
    Row,
    Col,
    Button
} from "reactstrap";

import HomePageNavbar from "components/Navbars/HomePageNavbar.js";
import HomePageHeader from "components/Headers/HomePageHeader.js";
import Footer from "components/Footers/Footer.js";

export default class CartPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: [],
            orderId: props.match.params.id,
            isLoaded: false,
            totalPrice: 0
        };
    }

    componentDidMount() {
        fetch(`http://localhost:8000/api/orderedbooks/${this.state.orderId}`)
            .then(response => response.json())
            .then(data => this.setState({ orders: data, isLoaded: true, totalPrice: data[0].totalPrice }));
    }

    render() {
        var { isLoaded, orders } = this.state;

        /*if (!isLoaded) {
            return (
                <div>
                    <HomePageNavbar />
                    <HomePageHeader />
                    <div>
                        <h3>loading...</h3>
                    </div>
                    <Footer />
                    </div>
            )
        }*/
        if(orders.length === 0){
            return (
                <div>
                    <HomePageNavbar />
                    <HomePageHeader />
                    <div>
                        <h3 style={{marginLeft: "40%", marginTop: "2%"}}>YOUR CART IS EMPTY :(</h3>
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
                    <div id="cartDiv" className="main" style={{ marginLeft: "20%", marginRight: "20%" }}>
                        <Row style={{ paddingTop: "2%", borderBottom: "2px solid lightgrey", }}>
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
                            <Row id={item.bookId} style={{ padding: "5px", height: "120px", marginBottom: "10px", borderBottom: "2px solid lightgrey" }}>
                                <Col md="1">
                                    <image src={item.bookCoverPhoto} style={{ width: "80px", height: "110px" }} />
                                </Col>
                                <Col md="3" style={{ marginTop: "15px" }}>
                                    <h3><strong>{item.bookTitle}</strong></h3>

                                </Col>
                                <Col md="4" style={{ marginTop: "15px" }}>
                                    <h3>{item.bookAuthor}</h3>
                                </Col>
                                <Col md="2" style={{ marginTop: "15px" }}>
                                    <h3>${item.bookPrice}</h3>
                                </Col>
                                <Col md="2" style={{ marginTop: "30px" }}>
                                    <Button className="btn-round mr-1" color="neutral" type="button" style={{ color: "red" }}>Remove</Button>
                                </Col>

                            </Row>

                        ))}
                        <Row>
                            <Col md="2" style={{ marginTop: "30px" }}>
                                <Button href='/home-page' color="primary" type="button" style={{ whiteSpace: "nowrap" }} size="lg">Continue shopping</Button>
                            </Col>
                            <Col md="4"></Col>
                            <Col md="2" style={{ marginTop: "15px" }}>
                                <h3 style={{ textAlign: "right", fontWeight: "bold" }}>Total:</h3>
                            </Col>
                            <Col md="2" style={{ marginTop: "15px" }}>
                                <h3 style={{ fontWeight: "bold" }}>${orders[0].totalPrice}</h3>
                            </Col>
                            <Col md="2" style={{ marginTop: "30px" }}>
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