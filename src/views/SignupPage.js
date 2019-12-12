import React from "react";

import { Form, Row, Col, FormGroup, Input, Button, Card } from "reactstrap";

export default class SignupPage extends React.Component {
  render() {
    return (
      <div>
        <Card
          style={{
            width: "450px",
            height: "500px",
            marginTop: "100px"
          }}
        >
          <Form>
            <FormGroup>
              <h3 style={{textAlign: "center"}}>Register</h3>
              <h6 for="fullName">Full name</h6>
              <Input
                type="text"
                name="full name"
                id="fullname"
                placeholder="e.g. Jane Doe"
              />
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <h6 for="exampleEmail">Email</h6>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="e.g. janedone@gmail.com"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <h6 for="examplePassword">Username</h6>
                  <Input
                    type="text"
                    name="username"
                    id="exUsername"
                    placeholder="e.g. janedoe"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <h6 for="examplePassword">Password</h6>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Create password"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <h6 for="examplePassword">Password</h6>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Confirm password"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button type="submit" color="primary">
              Sign in
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}
