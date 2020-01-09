import React from "react";

import {
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container
} from "reactstrap";

export default function Footer() {
    return (
        <Navbar style={{ marginTop: "50px", textAlign: "center" }} className="bg-primary" expand="lg">
            <Container>
                <div style={{ display: "inline-block", width: "100%", paddingLeft: "10%" }}>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/about-us">
                                <i
                                    aria-hidden={true}
                                    className="nc-icon nc-badge"
                                /> &nbsp;
                                About us
                      </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact-us">
                                <i
                                    aria-hidden={true}
                                    className="nc-icon nc-send"
                                /> &nbsp;
                                Contact us
                      </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/disclaimer">
                                <i
                                    aria-hidden={true}
                                    className="nc-icon nc-paper"
                                /> &nbsp;
                                Disclaimer
                      </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Container>
        </Navbar>
    );
}  