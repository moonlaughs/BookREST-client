import React, { useState } from "react";
import { useAsync } from 'react-async';
import { Link } from "react-router-dom";

import {
    Label,
    Row,
    Col,
} from "reactstrap";

const loadBookSuggestions = async () =>
    await fetch("https://bookstry20191122022423.azurewebsites.net/api/book/suggestions")
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json())

export default function BookSuggestionsBar() {

    const { data, error, isLoading } = useAsync({ promiseFn: loadBookSuggestions })
    if (isLoading) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data)    

        return (
            <div>
                <Row>
                    <Col>
                        <h4>Suggestions:</h4>
                        <div style={{ backgroundColor: "#fff", marginTop: "10px", borderLeft: "1px solid lightgrey" }}>
                            {data.map(suggestedBook =>
                                <Link  to={`/book-details-page/${suggestedBook.bookId}`}>
                                    <div style={{ textAlign: "center" }}>
                                        <img
                                            alt="..."
                                            className="img-thumbnail img-responsive"
                                            style={{ height: "190px", width: "60%", marginTop: "30px" }}
                                            src={suggestedBook.coverPhoto}
                                        />
                                        <h5 style={{ color: "black" }}><strong>{suggestedBook.title}</strong></h5>
                                        <Label style={{ color: "Red" }}><strong>€{suggestedBook.price}</strong></Label>
                                        <hr style={{ backgroundColor: "#E8E8E8", margin: "0px 25px 15px 25px" }} />
                                    </div>
                                </Link>
                            )}
                        </div>
                    </Col>
                </Row>
            </div>
        );
}