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

import MyShelf from './MyShelf';
import MyOrderShelf from './MyOrderShelf';

const MyShelfTabs = props => {

    const [activeTab, setActiveTab] = useState("1");

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <div>
          <Nav tabs style={{
            marginBottom: "90px",
            justifyContent: "center"
          }}>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                My Books
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                My Orders
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab} style={{marginLeft: "10%", width: "1000px"}}>
            <TabPane tabId="1">
            <MyShelf />
            </TabPane>
            <TabPane tabId="2">
            <MyOrderShelf />
            </TabPane>
          </TabContent>
        </div>
      );
}
export default MyShelfTabs;