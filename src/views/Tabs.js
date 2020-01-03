import React, { useState } from "react";
import classnames from "classnames";
import Footer from "components/Footers/Footer.js";

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
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

const Example = props => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div style={{
      marginTop: "5%"
      }}>
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
            Login
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Sign up
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} style={{display: "flex", justifyContent: "center"}}>
        <TabPane tabId="1">
          <Row>
            <Col md="12">
            <Card className="card-register">
              <LoginPage />
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col md="12">
              <Card className="card-register">
                <SignupPage />
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
      <Footer/>
    </div>
  );
};

export default Example;
