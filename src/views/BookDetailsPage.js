import React from "react";

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
        fetch(`https://bookstry20191122022423.azurewebsites.net/api/review`)
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

    render() {

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
                                        <label className="label label-info mr-1" style={{ margin: "0px 0px 20px 0px" }}>{this.state.book.genre}</label>
                                        <h5>{this.state.book.bookDes}</h5>
                                        <p style={{ margin: "20px 0px 0px 0px" }}><strong>Author: </strong>{this.state.book.author}</p>
                                        <p><strong>Price: </strong>{this.state.book.price}</p>
                                    </div>
                                </Col>
                            </Row>

                            {/* Buttons */}
                            <Row>
                                <Col sm="12">
                                    <div style={{ float: "right", width: "480px", marginTop: "20px" }}>
                                        <Button className="btn-round mr-1" color="info" type="button">
                                            READ DEMO</Button>
                                        <Button className="btn-round mr-1" color="default" type="button" onClick={this.downloadPDF.bind(this)}>
                                            DOWNLOAD PDF</Button>
                                        <Button className="btn-round mr-1" color="danger" type="button">
                                            ADD TO CART</Button>
                                    </div>
                                </Col>
                            </Row>

                            {/* Leave a review */}
                            <Row style={{ marginTop: "50px" }}>
                                <Col sm="12">
                                    <h4>Leave a review:</h4>
                                    <textarea
                                        style={{ marginTop: "5px", height: "100px", width: "100%", border: "1px solid #C0C0C0", padding: "5px 10px" }}
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
                                                    src={require("assets/img/person.jpg")}
                                                />
                                            </Col>
                                            <Col sm="9">
                                                <div style={{
                                                    margin: "20px 0px 20px -150px",
                                                    width: "123%", height: "100%",
                                                    padding: "5px 5px 5px 80px",
                                                    border: "1px solid #C0C0C0"
                                                }}>
                                                    <h5><strong>username</strong></h5>
                                                    <p style={{ marginTop: "15px", marginLeft: "15px" }}>{review.rText}</p>
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