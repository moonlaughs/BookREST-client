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
import SearchBar from "components/Other/SearchBar.js"
import SortSideBar from "components/Navbars/SortSideBar.js";
import Footer from "components/Footers/Footer.js";
import { Link } from "react-router-dom";
import HomePageBooks from "components/Navbars/HomePageBooks";

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            bookSearchKeyword: ""
        };
    }

    componentDidMount() {
        fetch('https://bookstry20191122022423.azurewebsites.net/api/book')
            .then(response => response.json())
            .then(data => this.setState({ books: data }));
    }

    render() {

        return (
            <div>
                <HomePageNavbar />
                <HomePageHeader />
                <div className="main">

                    <SearchBar />

                    <Row>
                        <Col sm="1">
                        </Col>

                        {/* Price and categories */}
                        <Col sm="2">
                            <SortSideBar />
                        </Col>

                        {/* Book lists */}
                       
                        <Col sm="8">
                        <HomePageBooks type="Free books"/>
                        <HomePageBooks type="Fantasy books"/>
                            {/*<h3>Most popular books:</h3>
                            <div style={{
                                backgroundColor: "#A9A9A9",
                                width: "100%", height: "310px",
                                overflowX: "scroll", overflowY: "hidden",
                                whiteSpace: "nowrap"
                            }}>
                                {this.state.books.map(book =>
                                    <Link to={`/book-details-page/${book.bookId}`}>
                                        <div style={{
                                            margin: "10px 0px 10px 20px", // ?????????
                                            padding: "10px",
                                            borderStyle: "solid",
                                            borderWidth: "1px",
                                            borderRadius: "20px",
                                            backgroundColor: "white",
                                            width: "380px",
                                            height: "280px",
                                            display: "inline-block"
                                        }}>

                                            <img
                                                alt="..."
                                                className="img-thumbnail img-responsive"
                                                style={{ height: "250px", float: "left", width: "50%" }}
                                                src={book.coverPhoto}
                                            />

                                            <div style={{ marginLeft: "15px", float: "left", width: "45%", height: "250px", position: "relative" }}>
                                                <h5 style={{ color: "black", fontSize: "18px", whiteSpace: "pre-wrap"}}><strong>{book.title}</strong></h5>
                                                <p style={{ color: "black" }}>{book.author}</p>
                                                <p style={{ bottom: "45px", position: "absolute", color: "black", fontSize: "20px" }}><i className="nc-icon nc-cart-simple" /> &nbsp; €{book.price}</p>
                                                <Button
                                                    className="btn-round"
                                                    style={{ width: "100%", bottom: "0", position: "absolute" }}
                                                    color="primary"
                                                    href="#pablo"
                                                    target="_blank"
                                                >
                                                    SEE DETAILS </Button>
                                            </div>
                                        </div>
                                    </Link>
                                )}
                            </div> */}
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