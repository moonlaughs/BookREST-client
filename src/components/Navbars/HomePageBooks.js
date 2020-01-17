import React from "react";
import { useAsync } from 'react-async';
import { Link } from "react-router-dom";

import {
    Button,
} from "reactstrap";

const loadHomePageFreeBookSuggestions = async () =>
    await fetch("https://bookstry20191122022423.azurewebsites.net/api/book/free")
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json())


export default function HomePageBooks() {

    const { data, error, isLoading } = useAsync({ promiseFn: loadHomePageFreeBookSuggestions })
    if (isLoading) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data)
    

        return (
            <div>
                <h3>Most popular books:</h3>
                <div style={{
                    backgroundColor: "#A9A9A9",
                    width: "100%", height: "310px",
                    overflowX: "scroll", overflowY: "hidden",
                    whiteSpace: "nowrap"
                }}>
                    {data.map(book =>
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
                                    <h5 style={{ color: "black", fontSize: "18px", whiteSpace: "pre-wrap" }}><strong>{book.title}</strong></h5>
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
                </div>
            </div>
        )
}