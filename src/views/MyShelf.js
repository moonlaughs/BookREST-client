import React, { Component } from "react";
import {
    CardTitle,
    Row,
    Col,
    Button,
    Card,
    CardBody,
    Label
} from "reactstrap";

import { Link } from "react-router-dom";

export default class MyBookShelf extends Component {

    constructor(props) {
        super(props);

        this.state = {
            books: [],
            personId: localStorage.getItem('personId'),
        };
    }

    componentDidMount() {
        fetch(`https://bookstry20191122022423.azurewebsites.net/api/personbook/person/${this.state.personId}`)
            .then(response => response.json())
            .then(data => this.setState({ books: data }));
    }

    render() {

        var { books } = this.state;

        if(books.length === 0){

            //mthod to get books again?

            return (
                <Row>
                    <Col md="12" style={{textAlign: "center"}}>
                        <h3>Your bookshelf is empty</h3>
                    </Col>
                </Row>
            )
        }
        else {
            return (
                <Row >
                    <Col md="12">
                            <div style={{ 
                                width: "100%", height: "400px", 
                                overflowX: "scroll", //overflowY: "hidden", 
                                display: "inline-block" }}>
                                <Row>
                                {books.map(item => (
                            <div style={{ textAlign: "center", width: "200px" }}>
                                    <img
                                        alt="..."
                                        className="img-thumbnail img-responsive"
                                        style={{ height: "190px", marginTop: "30px" }}
                                        src={item.coverPhoto}
                                    />
                                    <h5><strong>{item.bookTitle}</strong></h5>
                                    <hr style={{ backgroundColor: "#E8E8E8", margin: "0px 25px 15px 25px" }} />
                                    <Link style={{ color: "Black" }} to={`/read-book-page/${item.bookId}`}>
                                            <Button style={{ marginLeft: "5px" }} color="primary" type="button">
                                                READ</Button>
                                        </Link>
                                </div>

                        ))}
                                </Row>
                                
                            </div>
                        </Col>
                </Row>
        );
        }
        
    }
}