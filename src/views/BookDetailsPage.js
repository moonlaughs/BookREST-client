import React from "react";
import { Link } from "react-router-dom";

import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
} from "reactstrap";


import HomePageNavbar from "components/Navbars/HomePageNavbar.js";
import HomePageHeader from "components/Headers/HomePageHeader.js";
import SortSideBar from "components/Navbars/SortSideBar.js";
import BookSuggestionsBar from "components/Navbars/BookSuggestionsBar.js";
import Footer from "components/Footers/Footer.js";

export default class BookDetailsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            book: [],
            bookId: props.match.params.id,
            reviews: []
        };
    }

    componentDidMount() {
        fetch(`https://bookstry20191122022423.azurewebsites.net/api/book/${this.state.bookId}`)
            .then(response => response.json())
            .then(data => this.setState({ book: data }));
        fetch(`https://bookstry20191122022423.azurewebsites.net/api/book/${this.state.bookId}/reviews`)
            .then(response => response.json())
            .then(data => this.setState({ reviews: data }));
    }

    downloadPDF() {
        fetch(`${this.state.book.bookPdf}`)
            .then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = `${this.state.book.title}.pdf`;
                    a.click();
                });
            });

    }

    addToCart(myBook, myPrice){
        const someData = {
            orderId: localStorage.getItem('orderId'),
            bookId: myBook
        }
        fetch(`https://bookstry20191122022423.azurewebsites.net/api/bookorder/`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(someData)
        })

        const someData2 = {
            totalPrice: myPrice
        }

        fetch(`https://bookstry20191122022423.azurewebsites.net/api/order/priceUpdate/add/` + localStorage.getItem('orderId'), {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(someData2)
        })

        alert("Book has been added to the cart!");
    }

    addToShelf(myBook){
        const someData = {
            personId: localStorage.getItem('personId'),
            bookId: myBook
        }
        fetch(`https://bookstry20191122022423.azurewebsites.net/api/personbook`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(someData)
        })

        alert("Book has been added to the shelf!");
    }

    render() {

        let addBookButton;
        if (this.state.book.price === 0) {
            addBookButton = <Button style={{ marginLeft: "5px" }} color="success" type="button" onClick={() => this.addToShelf(this.state.bookId)}>
                ADD TO MY SHELF</Button>
        }
        else {
            addBookButton = <Button style={{ marginLeft: "5px" }} color="danger" type="button" onClick={() => this.addToCart(this.state.bookId, this.state.book.price)}>
                ADD TO CART</Button>
        }

        let bookLabel = `label label-${this.state.book.genre} mr-1`;

        return (
            <div>
                <HomePageNavbar />
                <HomePageHeader />
                <div className="main">
                    <Row style={{ marginTop: "50px", marginBottom: "100px" }}>
                        <Col sm="4">
                        </Col>
                        <Col sm="4">
                            <InputGroup>
                                <Input placeholder="Search" type="text" />
                                <InputGroupAddon addonType="append">
                                    <InputGroupText>
                                        <i aria-hidden={true} className="fa fa-search" />
                                    </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </Col>
                        <Col sm="4">
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="1">
                        </Col>

                        {/* Price and categories */}
                        <Col sm="2">
                            <SortSideBar />
                        </Col>

                        <Col sm="6">

                            {/* Book details */}
                            <Row>
                                <Col sm="3">
                                    <img
                                        alt="..."
                                        className="img-thumbnail img-responsive"
                                        style={{ height: "280px", float: "left", width: "95%" }}
                                        src={this.state.book.coverPhoto}
                                    />
                                </Col>
                                <Col sm="9">
                                    <div style={{ width: "90%" }}>
                                        <h3 style={{ margin: "0px" }}><strong>{this.state.book.title}</strong></h3>
                                        <label className={bookLabel} style={{ margin: "0px 0px 20px 0px" }}>{this.state.book.genre}</label>
                                        <h5>{this.state.book.bookDes}</h5>
                                        <p style={{ margin: "20px 0px 0px 0px" }}><strong>Author: </strong>{this.state.book.author}</p>
                                        <p><strong>Price: </strong>{this.state.book.price}</p>
                                    </div>
                                </Col>
                            </Row>

                            {/* Buttons */}
                            <Row>
                                <Col sm="3" style={{ textAlign: "center" }}>
                                    <Link style={{ color: "Black" }} to={`/book-demo-page/${this.state.book.bookId}`}>
                                        <Button className="btn-round" color="neutral" type="button">
                                            READ DEMO</Button>
                                    </Link>
                                </Col>
                                <Col sm="9">
                                    <div style={{ float: "right", width: "480px", marginTop: "20px" }}>
                                        <Link style={{ color: "Black" }} to={`/read-book-page/${this.state.book.bookId}`}>
                                            <Button style={{ marginLeft: "5px" }} color="primary" type="button">
                                                READ BOOK</Button>
                                        </Link>
                                        <Button style={{ marginLeft: "5px" }} color="default" type="button" onClick={this.downloadPDF.bind(this)}>
                                            DOWNLOAD PDF</Button>
                                        {addBookButton}
                                    </div>
                                </Col>
                            </Row>

                            {/* Leave a review */}
                            <Row style={{ marginTop: "50px" }}>
                                <Col sm="12">
                                    <h4>Leave a review:</h4>
                                    <textarea
                                        style={{ marginTop: "5px", height: "100px", width: "95%", border: "1px solid #C0C0C0", padding: "5px 10px" }}
                                        placeholder="Write your review here ..."
                                        type="text"></textarea>
                                    <Button style={{ marginTop: "8px", alignSelf: "left" }} color="primary" type="button">
                                        Publish</Button>
                                </Col>
                            </Row>

                            {/* Book reviews */}
                            <Row style={{ marginBottom: "90px" }}>
                                <Col sm="12">
                                    <h4 style={{ marginTop: "150px" }}>Reviews:</h4>
                                    {this.state.reviews.map(review =>
                                        <Row>
                                            <Col sm="3">
                                                <img
                                                    alt="..."
                                                    className="img-circle img-no-padding img-responsive"
                                                    style={{ width: "150px", height: "150px", marginTop: "20px", position: "absolute", zIndex: "1" }}
                                                    src={review.personUserPhoto}
                                                />
                                            </Col>
                                            <Col sm="9">
                                                <div style={{
                                                    margin: "22px 0px 20px -150px",
                                                    width: "100%", height: "120%",
                                                    padding: "5px 5px 5px 80px",
                                                    border: "1px solid #C0C0C0"
                                                }}>
                                                    <h5><strong>{review.personUsername}</strong></h5>
                                                    <p style={{ marginTop: "15px", marginLeft: "15px" }}>{review.reviewText}</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    )}
                                </Col>
                            </Row>

                        </Col>

                        {/* Book suggestions */}
                        <Col sm="2">
                            <BookSuggestionsBar />
                        </Col>

                        <Col sm="1">
                        </Col>

                    </Row>
                </div>
                <Footer />

            </div>
        );
    }

}