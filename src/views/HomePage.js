/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Link } from "react-router-dom";

// carousel
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBCarouselItem
} from "mdbreact";

// reactstrap components
import {
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

import HomePageNavbar from "components/Navbars/HomePageNavbar.js";
import HomePageHeader from "components/Headers/HomePageHeader.js";
import SortSideBar from "components/Navbars/SortSideBar.js";
import Footer from "components/Footers/Footer.js";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
  }

  componentDidMount() {
    fetch("https://bookstry20191122022423.azurewebsites.net/api/book")
      .then(response => response.json())
      .then(data => this.setState({ books: data }));
    console.log("DATA: " + this.state.books);
  }

  render() {
    return (
      <div>
        <HomePageNavbar />
        <HomePageHeader />
        <div className="main">
          <Row style={{ marginTop: "50px", marginBottom: "100px" }}>
            <Col sm="4"></Col>
            <Col sm="4">
              <InputGroup>
                <Input placeholder="Search" type="text" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i aria-hidden={true} className="fa fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Col>
            <Col sm="4"></Col>
          </Row>

          <Row>
            <Col sm="1"></Col>

            {/* Price and categories */}
            <Col sm="2">
              <SortSideBar />
            </Col>

            {/* Book lists */}
            <Col sm="8">
              <h3>Most popular books:</h3>
              <div
                id="multi-item-example"
                className="carousel slide carousel-multi-item"
                data-ride="carousel"
                style={{
                  backgroundColor: "#FFFFF",
                  width: "100%",
                  height: "300px",
                  display: "inline-block"
                }}
              >
                <MDBCarousel
                  data-ride="carousel"
                  activeItem={1}
                  length={3}
                  slide={true}
                  showControls={true}
                  multiItem={true}
                  style={{ height: "330px" }}
                >
                  <MDBCarouselInner role="listbox">
                    <MDBCarouselItem itemId="1">
                      {this.state.books.map(book => (
                        <MDBCard
                          style={{
                            width: "300px",
                            height: "230px",
                            margin: "10px",
                            display: "inline-block"
                          }}
                        >
                          <MDBRow>
                            <MDBCol md="6">
                              <img src={book.coverPhoto} style={{  width: "200px",  height: "220px", margin: "5px" }}/>
                            </MDBCol>
                            <MDBCol md="6">
                              <MDBCardBody
                                style={{
                                  flexDirection: "row",
                                  flexWrap: "wrap",
                                  wordWrap: "break-word"
                                }}
                              >
                                <div style={{ height: "45px"}}>
                                  <h6 style={{fontSize: "10px"}}>{book.title}</h6>
                                </div>

                                <div style={{height: "45px"}}>
                                  <h5>{book.author}</h5>
                                </div>
                                <div style={{height: "50px"}}>
                                  <h5>${book.price}</h5>
                                </div>
                              </MDBCardBody>
                              <MDBBtn className="btn-primary">
                                <Link className="" to="/details">
                                  Add to Cart
                                </Link>
                              </MDBBtn>
                            </MDBCol>
                          </MDBRow>
                        </MDBCard>
                      ))}
                      ;
                    </MDBCarouselItem>
                  </MDBCarouselInner>
                </MDBCarousel>
              </div>
            </Col>
            <Col sm="1"></Col>
          </Row>
        </div>
        <Footer />
      </div>
    );
  }
}
