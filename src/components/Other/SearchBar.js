import React, { useState } from "react";
import { useHistory } from 'react-router-dom'

import {
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Button,
    Row,
    Col,
} from "reactstrap";

export default function SearchBar() {

    let history = useHistory();
    let [bookKeyword, setNewBookKeyword] = useState("");

    function handleBookKeywordChange(e) {
        setNewBookKeyword(e.target.value)
    }

    function handleNavigation() {
        console.log("KW: " + bookKeyword)
        if(bookKeyword !== "") {
            history.push({pathname:"/book-results-page", state: {bookSearchKeyword: bookKeyword}})
        }        
    }

    return (
        <div>
            <Row style={{ marginTop: "50px", marginBottom: "100px" }}>
                <Col sm="4">
                </Col>
                <Col sm="4">
                    <InputGroup>
                        <Input style={{ height: "55px" }} placeholder="Search" type="text" onChange={e => handleBookKeywordChange(e)} />
                        <InputGroupAddon addonType="append">
                            <InputGroupText>
                                <Button onClick={handleNavigation.bind(this)}>
                                    <i aria-hidden={true} className="fa fa-search" />
                                </Button>
                            </InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </Col>
                <Col sm="4">
                </Col>
            </Row>
        </div>
    )

}