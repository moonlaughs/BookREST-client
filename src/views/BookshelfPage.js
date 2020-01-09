import React, { Component } from "react";

import {
    Row,
    Button
} from "reactstrap";

import { Link } from "react-router-dom";

import HomePageNavbar from "components/Navbars/HomePageNavbar.js";
import HomePageHeader from "components/Headers/HomePageHeader.js";
import DisclaimerBar from "components/Other/DisclaimerBar.js"
import Footer from "components/Footers/Footer.js";

export default class BookshelfPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
        };
    }



    componentDidMount() {
        fetch(`https://bookstry20191122022423.azurewebsites.net/api/personbook/person/${localStorage.getItem("personId")}`)
            .then(response => response.json())
            .then(data => this.setState({ books: data }));
    }

    render() {
        var { books } = this.state;

        if (books.length === 0) {

            return (
                <div>
                    <HomePageNavbar />
                    <HomePageHeader />
                    <div style={{ marginLeft: "40%", marginTop: "2%" }}>
                        <h3>Your Bookshelf is Empty</h3>
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
                    <DisclaimerBar />
                    <div className="main" style={{ marginLeft: "10%", marginRight: "10%" }}>
                        <h3><strong>Your Bookshelf</strong></h3>
                        <Row>
                                {books.map(item => (
                            <div style={{ textAlign: "center", width: "250px", borderBottom: "1px solid lightgrey", paddingBottom: "30px" }}>
                                    <img
                                        alt="..."
                                        className="img-thumbnail img-responsive"
                                        style={{ height: "190px", marginTop: "30px" }}
                                        src={item.coverPhoto}
                                    />
                                    <h5 style={{height: "50px"}}><strong>{item.bookTitle}</strong></h5>
                                    <hr style={{ backgroundColor: "#E8E8E8", margin: "0px 25px 15px 25px" }} />
                                    <Link style={{ color: "Black" }} to={`/read-book-page/${item.bookId}`}>
                                            <Button style={{ marginLeft: "5px" }} color="primary" type="button">
                                                READ</Button>
                                        </Link>
                                </div>

                        ))}
                                </Row>

                    </div>
                    <Footer />
                </div>
            );
        }
    }
}