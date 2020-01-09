import React from "react";
import '../assets/css/custom-about-us-page.css'

import {
    Row,
    Col,
} from "reactstrap";

import HomePageNavbar from "components/Navbars/HomePageNavbar.js";
import HomePageHeader from "components/Headers/HomePageHeader.js";
import SearchBar from "components/Other/SearchBar.js"
import SortSideBar from "components/Navbars/SortSideBar.js";
import BookSuggestionsBar from "components/Navbars/BookSuggestionsBar.js";
import Footer from "components/Footers/Footer.js";

export default class Disclaimer extends React.Component {
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

                        {/* Disclaimer */}
                        <Col sm="6">
                            <h2 style={{paddingLeft: "36%"}}><strong>Disclaimer</strong></h2>
                            <p style={{padding: "60px 20% 0px 10%", fontSize: "16px", textAlign: "center", fontWeight: "400"}}>
                                This web application is created for educational purposes <strong>only</strong>!
                                <br></br>
                                It is <strong>NOT</strong> an official webpage and we do not own any of the 
                                provided content. 
                                <br></br>
                                The <strong>payment</strong> is just a simulation of an online payment system and 
                                is also done just for educational purposes! Do <strong>NOT</strong> enter your
                                real bank details!
                                <br></br>
                                <br></br>
                                Below we are giving credit to some of the resources that we have used:
                                <br></br>
                                Template: <a href="https://www.creative-tim.com/" target="_blank"
                                style={{ color: "darkblue" }}
                                >creative-tim.com</a>
                                <br></br>
                                Icons: <a href="https://www.creative-tim.com/" target="_blank"
                                style={{ color: "darkblue" }}
                                >creative-tim.com</a>
                                <br></br>
                                Cover photo on every page: <a href="https://unsplash.com/photos/JHYLKimJzo8" target="_blank"
                                style={{ color: "darkblue" }}
                                >Photo by Casey Marie on Unsplash</a>
                                <br></br>
                                Logo and name: <a href="https://logomakr.com " target="_blank"
                                style={{ color: "darkblue" }}
                                >logomakr.com</a>
                                <br></br>
                                All book covers and pdf are found on the Internet.
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