import React, { useState } from "react";
import classnames from "classnames";

import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Card,
    Row,
    Col
} from "reactstrap";

import AdminUsers from './AdminUsers';
import AdminOrders from './AdminOrders';
import HomePageNavbar from "components/Navbars/HomePageNavbar.js";
import Footer from "components/Footers/Footer.js";
import Stats from "./Stats";

const AdminPanel = props => {

    const [activeTab, setActiveTab] = useState("1");

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <>
            <HomePageNavbar/>
            <div style={{marginTop: "5%"}}>
                <Nav tabs style={{
                    justifyContent: "center"
                }}>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === "1" })}
                            onClick={() => {
                                toggle("1");
                            }}
                        >
                            All Users
              </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === "2" })}
                            onClick={() => {
                                toggle("2");
                            }}
                        >
                            All Orders
              </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === "2" })}
                            onClick={() => {
                                toggle("3");
                            }}
                        >
                            Overview
              </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab} style={{marginLeft: "5%", marginRight: "5%"}}>{/* style={{marginLeft: "10%", width: "1000px"}}>*/}
                    <TabPane tabId="1">
                        <AdminUsers/>
                    </TabPane>
                    <TabPane tabId="2">
                        <AdminOrders />
                    </TabPane>
                    <TabPane tabId="3">
                            <Stats/>
                    </TabPane>
                </TabContent>
            </div>
            <Footer />
        </>
    );
}
export default AdminPanel;