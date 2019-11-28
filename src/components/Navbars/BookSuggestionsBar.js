import React from "react";

import {
    FormGroup,
    Label,
    Input,
    Row,
    Col,
} from "reactstrap";

export default function BookSuggestionsBar() {
    return (
        <div>
            <Row>
                <Col>
                    <h4>Suggestions:</h4>
                    <div style={{ backgroundColor: "#A9A9A9", marginTop: "10px" }}>
                        <div style={{ textAlign: "center" }}>
                            <img
                                alt="..."
                                className="img-thumbnail img-responsive"
                                style={{ height: "150px", width: "60%", marginTop: "30px" }}
                                //src={this.state.book.coverPhoto}
                            />
                            <h5>Title</h5>
                            <Label>Price</Label>
                            <hr style={{backgroundColor: "#E8E8E8", marginBottom: "15px"}}/>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}