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
        var valid = false;
        if (myNumber.value !== "") {
            if (/\D/.test(myNumber.value) === false && myNumber.value.length === 16) {
                myNumber.style.borderColor = "lightgreen";
                valid = true;
                return valid;
            }
            if (/\D/.test(myNumber.value) === true || myNumber.value.length !== 16) {
                myNumber.style.borderColor = "red";
                return valid;
            }
        }
        if (myNumber.value === "") {
            myNumber.style.borderColor = "red";
            return valid;
        }
        return valid;
    }

    validateName() {
        var myName = document.getElementById("name");
        var valid = false
        if (myName.value !== "") {
            if (/\d/.test(myName.value) === true) {
                myName.style.borderColor = "red";
                return valid;
            }
            if (/\d/.test(myName.value) === false) {
                myName.style.borderColor = "lightgreen";
                valid = true;
                return valid;
            }
        }
        if (myName.value === "") {
            myName.style.borderColor = "red";
            return valid;
        }
        return valid;
    }

    validateExpiry() {
        var myExpiry = document.getElementById("expiry");
        var valid = false;
        if (myExpiry.value !== "") {
            if (/\D/.test(myExpiry.value) === false && myExpiry.value.length === 4) {
                myExpiry.style.borderColor = "lightgreen";
                valid = true;
                return valid;
            }
            if (/\D/.test(myExpiry.value) === true || myExpiry.value.length !== 4) {
                myExpiry.style.borderColor = "red";
                return valid;
            }
        }
        if (myExpiry.value === "") {
            myExpiry.style.borderColor = "red";
            return valid;
        }
        return valid;
    }

    validateCvc() {
        var myCvc = document.getElementById("cvc");
        var valid = false;
        if (myCvc.value !== "") {
            if (/\D/.test(myCvc.value) === false && myCvc.value.length === 3) {
                myCvc.style.borderColor = "lightgreen";
                valid = true;
                return valid;
            }
            if (/\D/.test(myCvc.value) === true || myCvc.value.length !== 3) {
                myCvc.style.borderColor = "red";
                return valid;
            }
        }
        if (myCvc.value === "") {
            myCvc.style.borderColor = "red";
            return valid;
        }
        return valid;
    }

    validateDate(){
        var myExpiry = document.getElementById('expiry').value;
        var a = parseInt(myExpiry[0]);
        var b = parseInt(myExpiry[1]);
        var c = parseInt(myExpiry[2]);
        var d = parseInt(myExpiry[3]);

        var valid = false;

        if(c >= 2){
            if(c === 2 && d === 0){
                var currentMonth = 1;//new Date().getMonth() + 1;
                if(a === 0 && b !== 0){
                    if(b > currentMonth){
                        valid = true;
                        return valid;
                    }
                    else{
                        return valid;
                    }
                }
                else if(a === 1 && b < 3){
                    if(b === 0){
                        var myMonth = 10;
                        if(myMonth > currentMonth){
                            valid = true;
                            return valid;
                        }
                        else{
                            return valid;
                        }
                    }
                    else if(b === 1){
                        var myMonth = 11;
                        if(myMonth > currentMonth){
                            valid = true;
                            return valid;
                        }
                        else{
                            return valid;
                        }
                    }
                    else if(b === 2){
                        var myMonth = 12;
                        if(myMonth > currentMonth){
                            valid = true;
                            return valid;
                        }
                        else{
                            return valid;
                        }
                    }
                }
                else if(a === 1 && b > 2){
                    return valid;
                }
                else if(a > 1 || (a === 0 && b === 0)){
                    return valid;
                }
            }
            else{
                if(a === 0 && b !== 0){
                    valid = true;
                    return valid;
                }
                else if(a === 1 && b < 3){
                    valid = true;
                    return valid;
                }
                else if(a === 1 && b > 2){
                    return valid;
                }
                else if(a > 1){
                    return valid;
                }
                else if(a === 0 && b === 0){
                    return valid;
                }
            }
        }
        else if(c < 2){
            alert("card expired");
            return valid;
        }
        return valid;
    }

    paymentMethod() {   
        
        //add books to shelf
        fetch(`https://bookstry20191122022423.azurewebsites.net/api/orderedbooks/addtoshelf/${localStorage.getItem("personId")}`)
            .then(response => response.json())

        const someData = {
            cardNumber: document.getElementById("number").value,
            expiryDate: document.getElementById("expiry").value,
            cvc: document.getElementById("cvc").value
        }

        //proceeds with payment
        fetch(`https://bookstry20191122022423.azurewebsites.net/api/order/` + localStorage.getItem('orderId'), {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(someData)
        })
        
        const someData2 = {
            personId: localStorage.getItem('personId')
        }
        //creates new order, as in new cart
        fetch(`https://bookstry20191122022423.azurewebsites.net/api/order/`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(someData2)
        })

        alert("Payment completed!");
        window.location.reload();
    }

    validateData() {

        var validNumber = this.validateNumber();
        var validName = this.validateName();
        var validExpiry = this.validateExpiry();
        var validCvc = this.validateCvc();
        if (validNumber === true && validName === true && validExpiry === true && validCvc === true) {
            var validDate = this.validateDate();
            if(validDate === true){
                this.paymentMethod();
            }
            else if(validDate !== true){
                alert("Something is wrong with Expiry Date.");
            }
        }
        else {
            alert("Please fill in the fields.");
        }
    }

    Close() {
        window.location.href = `/cart-page/${localStorage.getItem('personId')}`
    }

    render() {
        return (
            <div id="PaymentForm" style={{backgroundColor: "#fff"}}>
                <div className="modal-body" >
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
                        <form style={{ float: "center", marginTop: "10px"}}>
                            <Input
                                type="tel"
                                name="number"
                                id="number"
                                placeholder="Card Number"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}

                                onKeyUp={this.validateNumber}
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

                                onKeyUp={this.validateName}
                                style={{ marginBottom: "5px" }}
                            />
                            <Input
                                type="tel"
                                name="expiry"
                                id="expiry"
                                placeholder="Expiry date {mm/yy}"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}

                                onKeyUp={this.validateExpiry}
                                maxLength="4"
                                style={{ display: "inline-block", width: "68%", marginRight: "2%" }}
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

                                onKeyUp={this.validateCvc}
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
                            onClick={this.validateData.bind(this)}
                        >
                            Pay Now
            </Button>
                    </div>
                </div>
            </div>
        );
    }
}