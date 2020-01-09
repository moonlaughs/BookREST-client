import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Row,
  Col
} from "reactstrap";

import { Link } from "react-router-dom";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  let loginButton;
  if (sessionStorage.getItem("loggedIn") === "1") {
    loginButton = <>
          <UncontrolledDropdown style={{display: "inline-block"}}>
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              caret
              color="primary"
              data-toggle="dropdown"
              id="dropdownMenuButton"
              type="button"
            >
              My Account
        </DropdownToggle>
            <DropdownMenu aria-labelledby="dropdownMenuButton">
              <DropdownItem onClick={e => e.preventDefault()} onClick={e => window.location.href("/my-bookshelf")}>
                My Bookshelf
          </DropdownItem>
              <DropdownItem onClick={e => e.preventDefault()} onClick={e => window.location.href("/my-orders")}>
                My Orders
          </DropdownItem>
              <DropdownItem onClick={e => e.preventDefault()} onClick={e => window.location.href("/my-profile")}>
                Settings
          </DropdownItem>
              <DropdownItem href="/home-page" onClick={e => e.preventDefault()} onClick={() => sessionStorage.setItem("loggedIn", 0)}>
                Log out
          </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Link onClick={e => window.location.href("/cart-page")}>
            <img alt="..."
              style={{ height: "30px", width: "30px", align: "center", marginLeft: "10px" }}
              src={require("assets/img/shopping-cart.png")}
            />
          </Link>
    </>

  }
  else {
    loginButton = <Button
      className="btn-round"
      color="primary"
      href="/tabs"
    >
      LOGIN
  </Button>
  }

  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">

      <Row style={{ width: "100%" }}>
        <Col md="2" style={{ textAlign: "center" }}>
          <Link onClick={e => window.location.href("/home-page")}>
            <img alt="..."
              style={{ height: "50px", width: "50px", align: "center" }}
              src={require("assets/img/Logo pic.png")}
            />
          </Link>
        </Col>
        <Col md="8" style={{ textAlign: "center" }}>
          <Link onClick={e => window.location.href("/home-page")}>
            <img alt="..."
              style={{ height: "75px", width: "150px" }}
              src={require("assets/img/Logo name.png")}
            />
          </Link>
        </Col>
        <Col md="2" style={{ textAlign: "center" }}>
            {loginButton}
        </Col>
      </Row>
    </Navbar>
  );
}

export default IndexNavbar;