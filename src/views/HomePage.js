import React from "react";

// reactstrap components
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
import Footer from "components/Footers/Footer.js";
import { Link } from "react-router-dom";

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
        };
    }

    componentDidMount() {
        fetch('https://bookstry20191122022423.azurewebsites.net/api/book')
            .then(response => response.json())
            .then(data => this.setState({ books: data }));
        console.log("DATA: " + this.state.books)
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

                        {/* Book lists */}
                        <Col sm="8">
                            <h3>Most popular books:</h3>
                            <div style={{ 
                                backgroundColor: "lightgrey", 
                                width: "100%", height: "310px", 
                                overflowX: "scroll", //overflowY: "hidden", 
                                display: "inline-block",}}>
                                <Row style={{ height: "310px" }}>
                                    {this.state.books.map(book =>

                                        <div style={{
                                            margin: "10px 0px 10px 20px", // ?????????
                                            padding: "10px",
                                            borderStyle: "solid",
                                            borderWidth: "1px",
                                            borderRadius: "20px",
                                            backgroundColor: "white",
                                            width: "445px",
                                            height: "280px"
                                        }}>
                                            <Link to={`/book-details-page/${book.bookId}`}>
                                                <img
                                                    alt="..."
                                                    className="img-thumbnail img-responsive"
                                                    style={{ height: "250px", float: "left", width: "40%" }}
                                                    src={book.coverPhoto}
                                                />
                                            </Link>
                                            <div style={{ marginLeft: "25px", float: "left", width: "50%" }}>
                                                <Link style={{ color: "Black" }} to={`/book-details-page/${book.bookId}`}>
                                                    <h5>{book.title}</h5>
                                                </Link>
                                                <p style={{ marginBottom: "120px" }}>{book.author}</p>
                                                <p style={{ marginBottom: "10px" }}><i className="nc-icon nc-cart-simple" /> &nbsp; {book.price}</p>
                                                <Button
                                                    className="btn-round"
                                                    style={{ width: "100%" }}
                                                    color="primary"
                                                    href="#pablo"
                                                    target="_blank"
                                                >
                                                    ADD TO CART </Button>
                                            </div>
                                        </div>

                                    )}
                                </Row>
                            </div>
                        </Col>

                        <Col sm="1">
                        </Col>

                    </Row>
                </div>
                <Footer />
            </div >
        )

    }

}