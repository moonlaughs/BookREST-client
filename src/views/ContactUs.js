import React from "react";
import '../assets/css/custom-about-us-page.css'

import {
    Row,
    Col,
} from "reactstrap";

import HomePageNavbar from "components/Navbars/HomePageNavbar.js";
import HomePageHeader from "components/Headers/HomePageHeader.js";
import DisclaimerBar from "components/Other/DisclaimerBar.js"
import SearchBar from "components/Other/SearchBar.js"
import SortSideBar from "components/Navbars/SortSideBar.js";
import BookSuggestionsBar from "components/Navbars/BookSuggestionsBar.js";
import Footer from "components/Footers/Footer.js";

export default class ContactUs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <HomePageNavbar />
                <HomePageHeader />
                <DisclaimerBar />
                <div className="main">

                    <SearchBar />

                    <Row>
                        <Col sm="1">
                        </Col>

                        {/* Price and categories */}
                        <Col sm="2">
                            <SortSideBar />
                        </Col>

                        {/* Contact us */}
                        <Col sm="6">
                            <h2 style={{paddingLeft: "36%"}}>Contact Us</h2>
                            <p style={{padding: "60px 20% 0px 10%", fontSize: "16px", textAlign: "center", fontWeight: "400"}}>
                                The website is still under construction and that is why we still don't have
                                email service but if you want to contact us about anything (suggestions, improvements, issues),
                                don't hesitate to send us an email at <strong>admin@bookREST.com</strong>
                                <br></br>
                                We are always glad to hear from our users and will reply as fast as we can! :)
                            </p>

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
        )
    }
}