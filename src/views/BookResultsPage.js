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
    Alert,
    Container
} from "reactstrap";

import HomePageNavbar from "components/Navbars/HomePageNavbar.js";
import HomePageHeader from "components/Headers/HomePageHeader.js";
import DisclaimerBar from "components/Other/DisclaimerBar.js"
import SortSideBar from "components/Navbars/SortSideBar.js";
import BookSuggestionsBar from "components/Navbars/BookSuggestionsBar.js";
import Footer from "components/Footers/Footer.js";

export default class BookResultsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            resultsFor: ""
        };
    }

    componentDidMount() {
        if (this.props.match.params) {
            fetch(`https://bookstry20191122022423.azurewebsites.net/api/book/${this.props.match.params.genre}`)
                .then(this.setState({ resultsFor: this.props.match.params.genre }))
                .then(response => response.json())
                .then(data => this.setState({ books: data }));
        }
        if (this.props.location.state) {
            if (this.props.location.state.bookSearchKeyword !== "") {
                fetch(`https://bookstry20191122022423.azurewebsites.net/api/book/search/${this.props.location.state.bookSearchKeyword}`)
                    .then(this.setState({ resultsFor: this.props.location.state.bookSearchKeyword }))
                    .then(response => response.json())
                    .then(data => this.setState({ books: data }));
            }
        }
    }

    handleKeywordSearchChange = () => {
        fetch(`https://bookstry20191122022423.azurewebsites.net/api/book/search/${this.state.bookSearchKeyword}`)
            .then(this.setState({ resultsFor: this.state.bookSearchKeyword }))
            .then(response => response.json())
            .then(data => this.setState({ books: data }));
    }

    render() {
        let noBooksAlert;
        if (!this.state.books.length) {
            noBooksAlert = <Alert
                className="alert-with-icon"
                color="warning"
            >
                <Container>
                    <div className="alert-wrapper">
                        <button
                            type="button"
                            className="close"
                            data-dismiss="alert"
                            aria-label="Close"
                        >
                            <i className="nc-icon nc-simple-remove" />
                        </button>
                        <div className="message">
                            <i className="nc-icon nc-bell-55" /> There were no books found with this keyword. Try again and make sure" +
                             "the book's title and/or author name are spelled correctly. :)
                </div>
                    </div>
                </Container>
            </Alert>
        }

        return (
            <div>
                <HomePageNavbar />
                <HomePageHeader />
                <DisclaimerBar />
                <div className="main">
                    <Row style={{ marginTop: "50px", marginBottom: "100px" }}>
                        <Col sm="4">
                        </Col>
                        <Col sm="4">
                            <InputGroup>
                                <Input style={{ height: "55px" }} placeholder="Search" type="text" onChange={e => this.setState({ bookSearchKeyword: e.target.value })} />
                                <InputGroupAddon addonType="append">
                                    <InputGroupText>
                                        <Button onClick={this.handleKeywordSearchChange.bind(this)}>
                                            <i aria-hidden={true} className="fa fa-search" />
                                        </Button>
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

                        {/* Book results */}
                        <Col sm="6">
                            <h3>Results for: <strong>{this.state.resultsFor}</strong></h3>
                            <div style={{
                                // backgroundColor: "#A9A9A9",
                                width: "100%", height: "630px",
                                //overflowX: "scroll", overflowY: "hidden", 
                                display: "inline-block"
                            }}>
                                <Row style={{ height: "100px", width: "100%", marginTop: "10px" }}>
                                    {noBooksAlert}
                                    {this.state.books.map(book =>
                                        <Link to={`/book-details-page/${book.bookId}`}>
                                            <div style={{
                                                margin: "10px 0px 10px 20px", // ?????????
                                                padding: "10px",
                                                borderStyle: "solid",
                                                borderWidth: "1px",
                                                borderRadius: "20px",
                                                backgroundColor: "white",
                                                width: "390px",
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
                                                    <h5 style={{ color: "black", fontSize: "18px", overflowWrap: "word-break" }}><strong>{book.title}</strong></h5>
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
                                </Row>
                            </div>
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