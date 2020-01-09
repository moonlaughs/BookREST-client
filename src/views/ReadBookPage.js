import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import {
    Button,
    Row,
    Col,
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

    render() {
        const { numPages, pageNumber } = this.state;

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
                            {/*  <i
                                style={{ fontSize: "3em" }}
                                aria-hidden={true}
                                className="nc-icon nc-minimal-right"
                                disabled={pageNumber >= numPages}
                                onClick={this.nextPage}
                          /> */}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}