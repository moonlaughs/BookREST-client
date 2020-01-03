import React, { useState, useEffect } from "react";
//import { Link, Redirect } from "react-router-dom";
import { useHistory } from 'react-router-dom'

import {
    FormGroup,
    Label,
    Input,
    Row,
    Col,
} from "reactstrap";

export default function SortSideBar() {

    let history = useHistory();
    let [isChecked, setNewState] = useState(false);
    let [genre, setGenre] = useState("");

    function handleCheckboxChange(e) {
        console.log("passes ..." + e.target.value)
        // let isChecked = e.target.checked;
        setNewState(e.target.checked);
        setGenre(e.target.value)
        window.location.reload();
        history.push(`/book-results-page/${e.target.value}`)
    }

  /*  useEffect(() => {
        console.log("Updates with new genre: " + genre)
            if (isChecked === true) {
                history.push({pathname: `/book-results-page/${genre}`, state: {genre: genre}})
            }
        
    }, [genre]) */

        return (
            <div>
                <Row>
                    <Col>
                        <Label>Prices:</Label>
                        <div className="form-check-radio">
                            <Label check>
                                <Input
                                    id="freeRadioButton"
                                    name="exampleRadios"
                                    type="radio"
                                />
                                Free <span className="form-check-sign" />
                            </Label>
                        </div>
                        <div className="form-check-radio">
                            <Label check>
                                <Input
                                    id="lowestRadioButton"
                                    name="exampleRadios"
                                    type="radio"
                                />
                                Lowest - Highest <span className="form-check-sign" />
                            </Label>
                        </div>
                        <div className="form-check-radio">
                            <Label check>
                                <Input
                                    id="hoghestRadioButton"
                                    name="exampleRadios"
                                    type="radio"
                                />
                                Highest - Lowest <span className="form-check-sign" />
                            </Label>
                        </div>
                    </Col>
                </Row>
                <Row style={{ height: "35px" }}></Row>
                <Row>
                    <Col>
                        <Label>Categories:</Label>
                        <div>
                            <FormGroup check>
                                <Label check>
                                    <Input value="Action" type="checkbox" onChange={e => handleCheckboxChange(e)} />
                                    Action and Adventure <span className="form-check-sign" />
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input value="Classic" type="checkbox" onChange={e => handleCheckboxChange(e)} />
                                    Classic <span className="form-check-sign" />
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input value="Crime" type="checkbox" onChange={e => handleCheckboxChange(e)} />
                                    Crime and Detective <span className="form-check-sign" />
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input value="Drama" type="checkbox" onChange={e => handleCheckboxChange(e)} />
                                    Drama <span className="form-check-sign" />
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input value="Fantasy" type="checkbox" onChange={e => handleCheckboxChange(e)} />
                                    Fantasy <span className="form-check-sign" />
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input value="Horror" type="checkbox" onChange={e => handleCheckboxChange(e)} />
                                    Horror <span className="form-check-sign" />
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input value="Humor" type="checkbox" onChange={e => handleCheckboxChange(e)} />
                                    Humor <span className="form-check-sign" />
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input value="Mystery" type="checkbox" onChange={e => handleCheckboxChange(e)} />
                                    Mystery <span className="form-check-sign" />
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input value="Mythology" type="checkbox" onChange={e => handleCheckboxChange(e)} />
                                    Mythology <span className="form-check-sign" />
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input value="Poetry" type="checkbox" onChange={e => handleCheckboxChange(e)} />
                                    Poetry <span className="form-check-sign" />
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input value="Romance" type="checkbox" onChange={e => handleCheckboxChange(e)} />
                                    Romance <span className="form-check-sign" />
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input value="ScienceFiction" type="checkbox" onChange={e => handleCheckboxChange(e)} />
                                    Science Fiction <span className="form-check-sign" />
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input value="Suspense" type="checkbox" onChange={e => handleCheckboxChange(e)} />
                                    Suspense <span className="form-check-sign" />
                                </Label>
                            </FormGroup>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }