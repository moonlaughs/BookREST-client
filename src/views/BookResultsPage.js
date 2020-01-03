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
import SortSideBar from "components/Navbars/SortSideBar.js";
import BookSuggestionsBar from "components/Navbars/BookSuggestionsBar.js";
import Footer from "components/Footers/Footer.js";

export default class BookDetailsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            bookGenre: props.match.params.genre,
            bookSearchKeyword: ""
        };
    }

    componentDidMount() {
        console.log("The genre 1 is: " + this.state.bookGenre)
        fetch(`https://bookstry20191122022423.azurewebsites.net/api/book/${this.state.bookGenre}`)
            .then(response => response.json())
            .then(data => this.setState({ books: data }));
    }
 
    handleKeywordSearchChange = () => {
        fetch(`https://bookstry20191122022423.azurewebsites.net/api/book/search/${this.state.bookSearchKeyword}`)
            .then(response => response.json())
            .then(data => this.setState({ books: data }));
        console.log("The searched word is " + this.state.bookSearchKeyword)
    }

    render() {

          {/* let addBookButton;
            if (this.state.book.price == 0) {
                addBookButton = <Button style={{ marginLeft: "5px" }} color="success" type="button">
                    ADD TO MY SHELF</Button>
            }
            else {
                addBookButton = <Button style={{ marginLeft: "5px" }} color="danger" type="button">
                    ADD TO CART</Button>
            } */}

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
                   "the book's title and/or author name is spelled correctly. :)
                </div>
              </div>
            </Container>
          </Alert> 
        } 

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
                                <Input style={{ height: "55px"}} placeholder="Search" type="text" onChange={e => this.setState({ bookSearchKeyword: e.target.value })} />
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
                            <h3>Results:</h3>
                            <div style={{
                               // backgroundColor: "#A9A9A9",
                                width: "100%", height: "630px",
                                //overflowX: "scroll", overflowY: "hidden", 
                                display: "inline-block"
                            }}>
                                <Row style={{ height: "100px", width: "100%", marginTop: "10px" }}>
                                    {noBooksAlert}
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