import React, { Component } from "react";

import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import {
    Row,
    Col,
    Button,
    Input,
} from "reactstrap";

import HomePageNavbar from "components/Navbars/HomePageNavbar.js";
import HomePageHeader from "components/Headers/HomePageHeader.js";
import Footer from "components/Footers/Footer.js";

export default class PaymentPage extends Component {

    state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    

    validateNumber(){
        var myNumber = document.getElementById("number");
        if(myNumber.value != null){
            myNumber.style.color="black";
            myNumber.style.borderColor = "lightgrey";
        }
        if(myNumber.value === ""){
            myNumber.style.borderColor = "red";
        }
    }

    validateName(){
        var myName = document.getElementById("name");
        if(myName.value != null){
            myName.style.color="black";
            myName.style.borderColor = "lightgrey";
        }
        if(myName.value === ""){
            myName.style.borderColor = "red";
        }
    }

    validateExpiry(){
        var myExpiry = document.getElementById("expiry");
        if(myExpiry.value != null){
            myExpiry.style.color="black";
            myExpiry.style.borderColor = "lightgrey";
        }
        if(myExpiry.value === ""){
            myExpiry.style.borderColor = "red";
        }
    }

    validateCvc(){
        var myCvc = document.getElementById("cvc");
        if(myCvc.value != null){
            myCvc.style.color="black";
            myCvc.style.borderColor = "lightgrey";
        }
        if(myCvc.value === ""){
            myCvc.style.borderColor = "red";
        }
    }

    validateData(){
        var myNumber = document.getElementById("number");
        if(myNumber.value != null){
            myNumber.style.color="black";
            myNumber.style.borderColor = "lightgrey";
        }
        if(myNumber.value === ""){
            myNumber.style.borderColor = "red";
        }

        var myName = document.getElementById("name");
        if(myName.value != null){
            myName.style.color="black";
            myName.style.borderColor = "lightgrey";
        }
        if(myName.value === ""){
            myName.style.borderColor = "red";
        }

        var myExpiry = document.getElementById("expiry");
        if(myExpiry.value != null){
            myExpiry.style.color="black";
            myExpiry.style.borderColor = "lightgrey";
        }
        if(myExpiry.value === ""){
            myExpiry.style.borderColor = "red";
        }
        
        var myCvc = document.getElementById("cvc");
        if(myCvc.value != null){
            myCvc.style.color="black";
            myCvc.style.borderColor = "lightgrey";
        }
        if(myCvc.value === ""){
            myCvc.style.borderColor = "red";
        }
    }

    render() {
        return (
            <div id="PaymentForm">
                <HomePageNavbar />
                <HomePageHeader />
                <div className="main" style={{ marginLeft: "20%", marginRight: "20%" }}>
                    <h2 style={{ marginBottom: "5px" }}>Checkout</h2>
                    <Row>
                        <Col md="6">
                            <Cards
                                cvc={this.state.cvc}
                                expiry={this.state.expiry}
                                focus={this.state.focus}
                                name={this.state.name}
                                number={this.state.number}
                            />
                        </Col>
                        <Col md="6">
                            <form>
                                <Input
                                    type="tel"
                                    name="number"
                                    id="number"
                                    placeholder="Card Number"
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}

                                    onKeyDown={this.validateNumber}
                                    maxLength="16"
                                    style={{ marginBottom: "5px" }}
                                />
                                <label style={{ color: "grey" }}>E.g.: 41..., 65...,</label>
                                <Input
                                    type="string"
                                    id="name"
                                    name="name"
                                    placeholder="Card's holder Name"
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}

                                    onKeyDown={this.validateName}
                                    style={{ marginBottom: "5px" }}
                                />
                                <Input
                                    type="tel"
                                    name="expiry"
                                    id="expiry"
                                    placeholder="Expiry date {mm/yy}"
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}

                                    onKeyDown={this.validateExpiry}
                                    maxLength="5"
                                    style={{ display: "inline-block", width: "60%", marginRight: "10%" }}
                                />
                                <Input
                                    type="tel"
                                    name="cvc"
                                    id="cvc"
                                    placeholder="CVC/CVV"
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}

                                    onKeyDown={this.validateCvc}
                                    maxLength="3"
                                    style={{ display: "inline-block", width: "30%" }}
                                />
                            </form>
                            <Button style={{ display: "inlie-block", float: "right", marginTop: "5px" }} size="lg" color="primary" type="button" onClick={this.validateData}>Pay now</Button>
                            <Button style={{ display: "inlie-block", float: "right", marginTop: "5px" }} size="lg" className="btn-link" color="default" type="button" href={`/home-page`}>Cancel</Button>
                        </Col>
                    </Row>


                </div>
                <Footer />
            </div>
        );
    }
}