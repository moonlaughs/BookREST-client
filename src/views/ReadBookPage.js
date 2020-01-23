import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import {
    Button,
    Row,
    Col,
    Input,
    InputGroup,
    Label,
    Alert
} from "reactstrap";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class ReadBookPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            book: [],
            bookId: props.match.params.id,
            numPages: null,
            pageNumber: 1,
        }
    }

    componentDidMount() {
        fetch(`https://bookstry20191122022423.azurewebsites.net/api/book/${this.state.bookId}`)
            .then(response => response.json())
            .then(data => this.setState({ book: data }));
    }

    onDocumentLoadSuccess = (document) => {
        const { numPages } = document;
        this.setState({
            numPages,
            pageNumber: 1,
        });
    };

    changePage = offset => this.setState(prevState => ({
        pageNumber: prevState.pageNumber + offset,
    }));

    previousPage = () => this.changePage(-1);

    nextPage = () => this.changePage(1);

    handlePageNumberChange = toPage => {
        if (toPage < this.state.pageNumber) {
            for (let i = 0; i < (this.state.pageNumber - toPage); i++) {
                this.changePage(-1)
            }
        }
        else if (toPage > this.state.pageNumber) {
            for (let i = 0; i < (toPage - this.state.pageNumber); i++) {
                this.changePage(1)
            }
        }
    }

    render() {
        const { numPages, pageNumber } = this.state;

        let invalidBookPageNotification;
        if (this.state.pageNumber < 1 || this.state.pageNumber > this.state.numPages) {
            invalidBookPageNotification = <Alert
                className="alert-with-icon"
                color="warning"
                style={{ marginBottom: "10px", textAlign: "center", width: "90%"}}
            >
                
                    <div className="alert-wrapper">
                        <div className="message">
                            <i className="nc-icon nc-bell-55" /> Please choose a page number from 1 to {this.state.numPages}
                        </div>
                    </div>
            
            </Alert>
        }

        return (
            <div>
                <Row>
                    <Col sm="3">
                        <div style={{ textAlign: "center", padding: "400px 0px" }}>
                            <Button
                                disabled={pageNumber <= 1}
                                onClick={this.previousPage}>
                                <i
                                    style={{ fontSize: "3em" }}
                                    aria-hidden={true}
                                    className="nc-icon nc-minimal-left"
                                />
                            </Button>
                        </div>
                    </Col>
                    <Col sm="6">
                        <div style={{ width: "30%", margin: "15px auto" }}>
                            <Label>Search by page number: </Label>
                            <InputGroup style={{ marginLeft: "10px", width: "55px", display: "inline-block" }}>
                                <Input style={{ height: "35px", width: "50px", display: "inline-block" }}
                                    placeholder={this.state.pageNumber} type="text"
                                    onChange={e => this.handlePageNumberChange(e.target.value)} />
                            </InputGroup>
                            <Label>/{this.state.numPages}</Label>
                        </div>
                        {invalidBookPageNotification}
                        <React.Fragment>
                            <div style={{ textAlign: "center", width: "950px" }}>
                                <Document
                                    file={this.state.book.bookPdf}
                                    onLoadSuccess={this.onDocumentLoadSuccess}
                                >
                                    <Page pageNumber={pageNumber} width="950" />
                                </Document>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <p>
                                    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                                </p>
                            </div>
                        </React.Fragment>
                    </Col>
                    <Col sm="3">
                        <div style={{ textAlign: "center", padding: "400px 0px" }}>
                            <Button
                                disabled={pageNumber >= numPages}
                                onClick={this.nextPage}>
                                <i
                                    style={{ fontSize: "3em" }}
                                    aria-hidden={true}
                                    className="nc-icon nc-minimal-right"
                                />
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}