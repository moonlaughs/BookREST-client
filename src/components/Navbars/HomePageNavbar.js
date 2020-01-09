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
  ButtonGroup,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  InputGroupAddon,
  InputGroupText
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
      <UncontrolledDropdown>
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
        <DropdownMenu aria-labelledby="dropdownMenuButton" style={{ marginTop: "15px" }}>
          <DropdownItem onClick={e => window.location.href("/my-bookshelf")}>
            My Bookshelf
          </DropdownItem>
          <DropdownItem onClick={e => window.location.href("/my-orders")}>
            My Orders
          </DropdownItem>
          <DropdownItem onClick={e => window.location.href("/my-profile")}>
            Settings
          </DropdownItem>
          <DropdownItem href="/home-page" onClick={e => e.preventDefault()} onClick={() => sessionStorage.setItem("loggedIn", 0)}>
            Log out
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <Link onClick={e => window.location.href("/cart-page")}
      >
        <InputGroupAddon addonType="append">
          <InputGroupText>
            <i className="nc-icon nc-cart-simple" />
          </InputGroupText>
        </InputGroupAddon>
      </Link>
    </>

  }
  else {
    loginButton = <Button
      className="btn-round"
      color="primary"
      href="http://localhost:3000/tabs"
    >
      LOGIN
  </Button>
  }

  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/home-page"
            title="Knowledge is priceless!"
          >
            <img alt="..."
              style={{ height: "50px", width: "50px" }}
              src={require("assets/img/Logo pic.png")}
            />
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                href="/home-page"
                style={{
                  fontSize: "15px"
                }}
              >
                <img alt="..."
                  style={{ height: "50px", width: "100px" }}
                  src={require("assets/img/Logo name.png")}
                />
              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                className="btn-round"
                color="primary"
                href="http://localhost:3000/tabs"
              >
                {loginButton}
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;