import React, { Component } from "react";

import {
    Row,
    Col,
    Button
} from "reactstrap";

import HomePageNavbar from "components/Navbars/HomePageNavbar.js";
import HomePageHeader from "components/Headers/HomePageHeader.js";
import Footer from "components/Footers/Footer.js";

export default class booksOfOrder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
        };
    }



    componentDidMount() {
        fetch(`https://bookstry20191122022423.azurewebsites.net/api/OrderedBooks/byOrder/${this.props.orderId}`)
            .then(response => response.json())
            .then(data => this.setState({ books: data }));
    }

    render() {
        var { books } = this.state;

        if (books.length === 0) {
            return (
                <h3>No purchased books</h3>
            );
        }
        else {



            return (
                <>
                    {books.map(item => (
                        <Row id={item.bookId} style={{ marginTop: "5px", marginLeft: "5%", marginRight: "5%", height: "120px", marginBottom: "10px", borderBottom: "2px dotted lightgrey" }}>
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
                                <h3>€{item.bookPrice}</h3>
                            </Col>

                        </Row>
                    ))}
                </>
            );
        }
    }
}