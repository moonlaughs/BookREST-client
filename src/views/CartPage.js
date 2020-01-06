import React, { Component } from "react";

import {
    Row,
    Col,
    Button
} from "reactstrap";

import HomePageNavbar from "components/Navbars/HomePageNavbar.js";
import HomePageHeader from "components/Headers/HomePageHeader.js";
import Footer from "components/Footers/Footer.js";

import PaymentButton from "./PaymentButton.js";

export default class CartPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: [],
            //personId: props.match.params.id,
        };
    }



    componentDidMount() {
        fetch(`https://bookstry20191122022423.azurewebsites.net/api/orderedbooks/${localStorage.getItem("personId")}`)
            .then(response => response.json())
            .then(data => this.setState({ orders: data }));
    }

    getOrderId() {
        //get new orderId
        fetch(`https://bookstry20191122022423.azurewebsites.net/api/order/orderId/${localStorage.getItem("personId")}`)
            .then(response => response.json())
            .then(data => localStorage.setItem('orderId', data))
    }

    removeBookFromCart(orderId, bookId, bookPrice) {
        console.log(orderId);
        console.log(bookId);
        if (window.confirm("Are you sure you want to delete this item?")) {
            //remove book
            fetch("https://bookstry20191122022423.azurewebsites.net/api/bookorder/" + orderId + "/" + bookId, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            //update totalPrice
            const someData = {
                totalPrice: bookPrice
            }
            fetch(`https://bookstry20191122022423.azurewebsites.net/api/order/priceUpdate/remove/` + localStorage.getItem('orderId'), {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(someData)
            })



        } else {
            console.log("cancelled")
        }
        window.location.reload();
    }

    render() {
        var { orders } = this.state;

        if (orders.length === 0) {

            this.getOrderId();

            return (
                <div>
                    <HomePageNavbar />
                    <HomePageHeader />
                    <div style={{ marginLeft: "40%", marginTop: "2%" }}>
                        <h3>YOUR CART IS EMPTY :(</h3>
                    </div>
                    <Footer />
                </div>
            )
        }
        else {

            localStorage.setItem('orderId', JSON.stringify(orders[0].orderId))
            //localStorage.setItem('personId', JSON.stringify(orders[0].personId))
            return (
                <div>
                    <HomePageNavbar />
                    <HomePageHeader />
                    <div className="main" style={{ marginLeft: "20%", marginRight: "20%" }}>
                        <h2>Your Cart</h2>
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
                            <Row id={item.bookId} style={{ marginTop: "5px", height: "120px", marginBottom: "10px", borderBottom: "2px solid lightgrey" }}>
                                <Col md="1">
                                    <img alt="" src={item.bookCoverPhoto} style={{ width: "80px", height: "110px" }} />
                                </Col>
                                <Col md="4" style={{ marginTop: "15px" }}>
                                    <h3><strong>{item.bookTitle}</strong></h3>

                                </Col>
                                <Col md="3" style={{ marginTop: "15px" }}>
                                    <h3>{item.bookAuthor}</h3>
                                </Col>
                                <Col md="2" style={{ marginTop: "15px" }}>
                                    <h3>${item.bookPrice}</h3>
                                </Col>
                                <Col md="2" style={{ marginTop: "30px" }}>
                                    <Button id={item.bookId} className="btn-link" color="danger" type="button" onClick={() => this.removeBookFromCart(item.orderId, item.bookId, item.bookPrice)}>Remove</Button>
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
                                <PaymentButton />
                            </Col>
                        </Row>

                    </div>
                    <Footer />
                </div>
            );
        }
    }
}