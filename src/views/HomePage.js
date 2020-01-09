import React from "react";

// reactstrap components
import {
    Row,
    Col,
} from "reactstrap";

import HomePageNavbar from "components/Navbars/HomePageNavbar.js";
import HomePageHeader from "components/Headers/HomePageHeader.js";
import DisclaimerBar from "components/Other/DisclaimerBar.js"
import SearchBar from "components/Other/SearchBar.js"
import SortSideBar from "components/Navbars/SortSideBar.js";
import Footer from "components/Footers/Footer.js";
import HomePageBooks from "components/Navbars/HomePageBooks.js";
import HomePageBooks2 from "components/Navbars/HomePageBooks2.js";

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            bookSearchKeyword: ""
        };
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

                        {/* Book lists */}
                        <Col sm="8">
                            <HomePageBooks />
                            <HomePageBooks2 />
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