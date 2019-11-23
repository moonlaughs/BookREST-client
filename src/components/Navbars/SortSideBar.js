import React from "react";

import {
    FormGroup,
    Label,
    Input,
    Row,
    Col,
} from "reactstrap";

export default function SortSideBar() {
    return (
        <div>
            <Row>
                <Col>
                    <Label>Prices:</Label>
                    <div className="form-check-radio">
                        <Label check>
                            <Input
                                id="exampleRadios2"
                                name="exampleRadios"
                                type="radio"
                            />
                            Free <span className="form-check-sign" />
                        </Label>
                    </div>
                    <div className="form-check-radio">
                        <Label check>
                            <Input
                                id="exampleRadios2"
                                name="exampleRadios"
                                type="radio"
                            />
                            Lowest - Highest <span className="form-check-sign" />
                        </Label>
                    </div>
                    <div className="form-check-radio">
                        <Label check>
                            <Input
                                id="exampleRadios2"
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
                    <Label>Cetegories:</Label>
                    <div>
                        <FormGroup check>
                            <Label check>
                                <Input defaultValue="" type="checkbox" />
                                Action and Adventure <span className="form-check-sign" />
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input defaultValue="" type="checkbox" />
                                Classic <span className="form-check-sign" />
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input defaultValue="" type="checkbox" />
                                Crime and Detective <span className="form-check-sign" />
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input defaultValue="" type="checkbox" />
                                Drama <span className="form-check-sign" />
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input defaultValue="" type="checkbox" />
                                Fantasy <span className="form-check-sign" />
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input defaultValue="" type="checkbox" />
                                Horror <span className="form-check-sign" />
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input defaultValue="" type="checkbox" />
                                Humor <span className="form-check-sign" />
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input defaultValue="" type="checkbox" />
                                Mystery <span className="form-check-sign" />
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input defaultValue="" type="checkbox" />
                                Mythology <span className="form-check-sign" />
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input defaultValue="" type="checkbox" />
                                Poetry <span className="form-check-sign" />
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input defaultValue="" type="checkbox" />
                                Romance <span className="form-check-sign" />
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input defaultValue="" type="checkbox" />
                                Science Fiction <span className="form-check-sign" />
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input defaultValue="" type="checkbox" />
                                Suspense <span className="form-check-sign" />
                            </Label>
                        </FormGroup>
                    </div>
                </Col>
            </Row>
        </div>
    );
}