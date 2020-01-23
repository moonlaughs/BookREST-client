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

export default class AboutUs extends React.Component {
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

                        {/* About us */}
                        <Col sm="6">
                            <h2 style={{paddingLeft: "36%"}}>About Us</h2>
                            <div class="container">
                                <img alt="BookREST logo"
                                    class="image"
                                    style={{ marginTop: "80px", height: "200px", width: "200px" }}
                                    src={require("assets/img/Logo pic.png")}
                                />
                                <div class="middle">
                                    <div class="text">Because knowledge is priceless ;)</div>
                                </div>
                            </div>
                            <p style={{padding: "60px 20% 0px 10%", fontSize: "16px", textAlign: "center", fontWeight: "400"}}>We are a small team of three entusiastics girls in their 3rd year of Computer Science
                                and with a big passion for books. And from here our idea about a web application,
                                providing free and easy to access books inspired us to create BookREST. 
                                
                                We hope that you enjoy using our website and feel encouraged to read more. :)
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