import React, { Component } from "react";

import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import {
    Row,
    Input,
    Button
} from "reactstrap";

export default class PaymentPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cvc: '',
            expiry: '',
            focus: '',
            name: '',
            number: '',
        };
    }

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    validateNumber() {
        var myNumber = document.getElementById("number");
        if (myNumber.value != null) {
            if (/\D/.test(myNumber.value) === false) {
                myNumber.style.borderColor = "lightgreen";
            }
            if (/\D/.test(myNumber.value) === true) {
                myNumber.style.borderColor = "red";
            }
        }
        if (myNumber.value === "") {
            myNumber.style.borderColor = "red";
        }
    }

    validateName() {
        var myName = document.getElementById("name");
        if (myName.value != null) {
            if (/\d/.test(myName.value) === true) {
                myName.style.borderColor = "red";
            }
            if (/\d/.test(myName.value) === false) {
                myName.style.borderColor = "lightgreen";
            }
        }
        if (myName.value === "") {
            myName.style.borderColor = "red";
        }
    }

    validateExpiry() {
        var myExpiry = document.getElementById("expiry");
        if (myExpiry.value != null) {
            if (/\D/.test(myExpiry.value) === false) {
                myExpiry.style.borderColor = "lightgreen";
            }
            if (/\D/.test(myExpiry.value) === true) {
                myExpiry.style.borderColor = "red";
            }
        }
        if (myExpiry.value === "") {
            myExpiry.style.borderColor = "red";
        }
    }

    validateCvc() {
        var myCvc = document.getElementById("cvc");
        if (myCvc.value != null) {
            if (/\D/.test(myCvc.value) === false) {
                myCvc.style.borderColor = "lightgreen";
            }
            if (/\D/.test(myCvc.value) === true) {
                myCvc.style.borderColor = "red";
            }
        }
        if (myCvc.value === "") {
            myCvc.style.borderColor = "red";
        }
    }

    validateData() {
        var myNumber = document.getElementById("number");
        if (myNumber.value != null && myNumber.value.length === 16) {
            if (/\D/.test(myNumber.value) === true) {
                //non digit found
                myNumber.style.borderColor = "red";
            }
            else {
                myNumber.style.borderColor = "lightgreen";

                var myName = document.getElementById("name");
                if (myName.value != null) {
                    if (/\d/.test(myName.value) === true) {
                        //digit found
                        myName.style.borderColor = "red";
                    }
                    else {
                        myName.style.borderColor = "lightgreen";

                        var myCvc = document.getElementById("cvc");
                        if (myCvc.value != null && myCvc.value.length === 3) {
                            if (/\D/.test(myCvc.value) === true) {
                                myCvc.style.borderColor = "red";
                            }
                            else {
                                myCvc.style.borderColor = "lightgreen";

                                var myExpiry = document.getElementById("expiry");
                                if (myExpiry.value != null && myExpiry.value.length === 4) {
                                    if (/\D/.test(myExpiry.value) === true) {
                                        myExpiry.style.borderColor = "red";
                                    }
                                    else {
                                        myExpiry.style.borderColor = "lightgreen";
                                        if (myExpiry.value[2] >= 2 && myExpiry.value[3] >= 0) {
                                            if (myExpiry.value[2] === 2 && myExpiry.value[3] === 0) {
                                                if (myExpiry.value[0] === 0) {
                                                    var currentMonth = 1;//new Date().getMonth() + 1;  //later we need to change it, for now is december so it is harder
                                                    console.log(currentMonth);
                                                    if (myExpiry.value[1] > currentMonth) {
                                                        //alert("Card is valid 1")
                                                        //payment complete

                                                        //console.log(localStorage.getItem('orderId'));

                                                    const someData = {
                                                        cardNumber: myNumber.value,
                                                        expiryDate: myExpiry.value,
                                                        cvc: myCvc.value
                                                    }

                                                    fetch(`http://localhost:8000/api/order/` + localStorage.getItem('orderId'), {
                                                        method: "PUT",
                                                        headers: {
                                                          Accept: "application/json",
                                                          "Content-Type": "application/json"
                                                        },
                                                        body: JSON.stringify(someData)
                                                    })

                                                    alert("Payment completed!");
                                                    window.location.reload();

                                                    }
                                                    else {
                                                        alert("Card is Expired")
                                                    }
                                                }
                                                if (myExpiry.value[0] > 1) {
                                                    alert("Wrong expiry date");
                                                }
                                            }
                                            else {
                                                if (myExpiry.value[0] === 0) {

                                                    //console.log(localStorage.getItem('orderId'));

                                                    const someData = {
                                                        cardNumber: myNumber.value,
                                                        expiryDate: myExpiry.value,
                                                        cvc: myCvc.value
                                                    }

                                                    fetch(`http://localhost:8000/api/order/` + localStorage.getItem('orderId'), {
                                                        method: "PUT",
                                                        headers: {
                                                          Accept: "application/json",
                                                          "Content-Type": "application/json"
                                                        },
                                                        body: JSON.stringify(someData)
                                                    })

                                                    alert("Payment completed!");

                                                    window.location.reload();
                                                }
                                                if (myExpiry.value[0] < 2) {
                                                    //alert("card is valid 4");
                                                    if(myExpiry.value[0] == 0){
                                                        const someData = {
                                                            cardNumber: myNumber.value,
                                                            expiryDate: myExpiry.value,
                                                            cvc: myCvc.value
                                                        }
    
                                                        fetch(`http://localhost:8000/api/order/` + localStorage.getItem('orderId'), {
                                                            method: "PUT",
                                                            headers: {
                                                              Accept: "application/json",
                                                              "Content-Type": "application/json"
                                                            },
                                                            body: JSON.stringify(someData)
                                                        })
    
                                                        alert("Payment completed!");
    
                                                        window.location.reload();
                                                    }
                                                    else if(myExpiry.value[0] == 1){
                                                        console.log("got 1")
                                                        if(myExpiry.value[1] > 2){
                                                            alert("wrong expiry date")
                                                        }
                                                        else{
                                                            const someData = {
                                                                cardNumber: myNumber.value,
                                                                expiryDate: myExpiry.value,
                                                                cvc: myCvc.value
                                                            }
        
                                                            fetch(`http://localhost:8000/api/order/` + localStorage.getItem('orderId'), {
                                                                method: "PUT",
                                                                headers: {
                                                                  Accept: "application/json",
                                                                  "Content-Type": "application/json"
                                                                },
                                                                body: JSON.stringify(someData)
                                                            })
        
                                                            alert("Payment completed!");
        
                                                            window.location.reload();
                                                        }
                                                    }
                                                }
                                                else{
                                                    alert("Wrong expiry date");
                                                }
                                            }
                                        }
                                        else {
                                            alert("Card is expired")
                                        }
                                    }
                                }
                                if (myExpiry.value === "" || myExpiry.value.length !== 4) {
                                    myExpiry.style.borderColor = "red";
                                }
                            }
                        }
                        if (myCvc.value === "" || myCvc.value.length !== 3) {
                            myCvc.style.borderColor = "red";
                        }
                    }
                }
                if (myName.value === "") {
                    myName.style.borderColor = "red";
                }
            }
        }
        if (myNumber.value === "" || myNumber.value.length !== 16) {
            myNumber.style.borderColor = "red";
        }
    }

    Close(){
        window.location.href=`/cart-page/${localStorage.getItem('personId')}`
    }

    render() {
        return (
            <div id="PaymentForm">
                <div className="modal-body">
                    <Row>
                        <Cards
                            cvc={this.state.cvc}
                            expiry={this.state.expiry}
                            focus={this.state.focus}
                            name={this.state.name}
                            number={this.state.number}
                        />
                    </Row>
                    <Row>
                        <form style={{ float: "center", marginTop: "10px" }}>
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
                                maxLength="4"
                                style={{ display: "inline-block", width: "60%", marginRight: "10%" }}
                            />
                            <Input
                                type="tel"
                                name="cvc"
                                id="cvc"
                                placeholder="CVC/CVV"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                                pattern="[0-9]{3}"
                                title="Three digits number"

                                onKeyDown={this.validateCvc}
                                maxLength="3"
                                style={{ display: "inline-block", width: "30%" }}
                            />
                        </form>


                    </Row>
                </div>
                <div className="modal-footer">
                    <div className="left-side">
                        <Button
                            className="btn-link"
                            color="default"
                            type="button"
                            data-dismiss="modal"
                            onClick={this.Close}
                        >
                            Cancel
            </Button>
                    </div>
                    <div className="divider" />
                    <div className="right-side">
                        <Button
                            className="btn-link"
                            color="primary"
                            type="button"
                            onClick={this.validateData}
                        >
                            Pay Now
            </Button>
                    </div>
                </div>
            </div>
        );
    }
}