import React from "react";
import { Link } from "react-router-dom";
import PieChart from 'react-minimal-pie-chart';

import {
    Button,
    Row,
    Col
} from "reactstrap";
import BooksOfOrder from "./booksOfOrder";

export default class Stats extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            allUsers: [],
            admins: [],
            users: [],
            allBooks: [],
            freeBooks: [],
            paidBooks: [],
            allOrders: [],
            paidOrders: [],
            openOrders: [],
        };
    }

    componentDidMount() {

        fetch(`https://bookstry20191122022423.azurewebsites.net/api/person`)
            .then(response => response.json())
            .then(data => this.setState({ allUsers: data }));

            fetch(`https://bookstry20191122022423.azurewebsites.net/api/person/allusers`)
                .then(response => response.json())
                .then(data => this.setState({ users: data }));
                
        fetch(`https://bookstry20191122022423.azurewebsites.net/api/person/alladmins`)
        .then(response => response.json())
        .then(data => this.setState({ admins: data }));

        fetch(`https://bookstry20191122022423.azurewebsites.net/api/book`)
            .then(response => response.json())
            .then(data => this.setState({ allBooks: data }));
            
        fetch(`https://bookstry20191122022423.azurewebsites.net/api/book/allfreebooks`)
        .then(response => response.json())
        .then(data => this.setState({ freeBooks: data }));

        fetch(`https://bookstry20191122022423.azurewebsites.net/api/book/allpaidbooks`)
        .then(response => response.json())
        .then(data => this.setState({ paidBooks: data }));

            fetch(`https://bookstry20191122022423.azurewebsites.net/api/order`)
            .then(response => response.json())
            .then(data => this.setState({ allOrders: data }));

            fetch(`https://bookstry20191122022423.azurewebsites.net/api/order/allopenorders`)
                .then(response => response.json())
                .then(data => this.setState({ openOrders: data }));

        fetch(`https://bookstry20191122022423.azurewebsites.net/api/order/allpaid`)
            .then(response => response.json())
            .then(data => this.setState({ paidOrders: data }));

    }

    render() {
        var { allUsers, admins, users, allBooks, freeBooks, paidBooks, allOrders, paidOrders, openOrders } = this.state;

        return (
            <>
                <Row style={{ paddingTop: "2%", color: "black" }}>


                    <Col md="6">
                        <Row>
                            <Col md="6">
                                <h3>EBOOKS OVERVIEW</h3>
                                <PieChart style={{ height: "50%", paddingTop: "10px" }}
                                    data={[
                                        { title: 'eBooks FREE', value: `${freeBooks}`, color: 'lightgreen' },
                                        { title: 'eBooks PAID', value: `${paidBooks}`, color: 'red' },
                                    ]}
                                    totalValue={allBooks.length}
                                />
                                <h4>Number of all eBooks: <strong>{allBooks.length}</strong></h4>
                            </Col>
                            <Col md="6">
                                <h4>LEGEND</h4>
                                <br></br>
                                <label className="label label-success mr-1" style={{ backgroundColor: "lightgreen", margin: "0px 0px 20px 0px" }}>FREE eBooks</label>
                                <label>{freeBooks}</label>
                                <br />
                                <label className="label label-danger mr-1" style={{ backgroundColor: "red", margin: "0px 0px 20px 0px" }}>PAID eBooks</label>
                                <label>{paidBooks}</label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <h3>USERS OVERVIEW</h3>
                                <PieChart style={{ height: "50%", paddingTop: "10px" }}
                                    data={[
                                        { title: 'admins', value: `${admins}`, color: 'lightyellow' },
                                        { title: 'users', value: `${users}`, color: 'lightblue' },
                                    ]}

                                    totalValue={allUsers.length}
                                />
                                <h4>Number of all users: <strong>{allUsers.length}</strong></h4>
                            </Col>
                            <Col md="6">
                                <h4>LEGEND</h4>
                                <br></br>
                                <label className="label label-success mr-1" style={{ backgroundColor: "lightyellow", margin: "0px 0px 20px 0px" }}>Admins</label>
                                <label>{admins}</label>
                                <br />
                                <label className="label label-danger mr-1" style={{ backgroundColor: "lightblue", margin: "0px 0px 20px 0px" }}>Users</label>
                                <label>{users}</label>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="6">
                        <Row>
                            <Col md="6">
                                <h3>ORDERS OVERVIEW</h3>
                                <PieChart style={{ height: "50%", paddingTop: "10px" }}
                                    data={[
                                        { title: 'finalized orders', value: `${paidOrders.length}`, color: 'turquoise' },
                                        { title: 'open orders', value: `${openOrders}`, color: 'grey' },
                                    ]}
                                    totalValue={allOrders.length}
                                />
                                <h4>Number of all orders: <strong>{allOrders.length}</strong></h4>
                            </Col>
                            <Col md="6">
                                <h4>LEGEND</h4>
                                <br></br>
                                <label className="label label-success mr-1" style={{ backgroundColor: "turquoise", margin: "0px 0px 20px 0px" }}>Finalized Orders</label>
                                <label>{paidOrders.length}</label>
                                <br />
                                <label className="label label-danger mr-1" style={{ backgroundColor: "grey", margin: "0px 0px 20px 0px" }}>Open Orders</label>
    <label>{openOrders}</label>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </>
        );
    }
}