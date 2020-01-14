/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./web.config";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// example pages
//import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/template/examples/LandingPage.js";
import ProfilePage from "views/template/examples/ProfilePage.js";
import RegisterPage from "views/template/examples/RegisterPage.js";
// our pages
import HomePage from "views/HomePage.js";
import BookResultsPage from "views/BookResultsPage.js"
import BookDetailsPage from "views/BookDetailsPage.js";
import ReadBookPage from "views/ReadBookPage.js";
import BookDemoPage from "views/BookDemoPage.js";
import CartPage from "views/CartPage";
import PaymentPage from "views/PaymentPage.js";
import MyProfilePage from "views/MyProfilePage.js";
import Tabs from "views/Tabs.js";
import MyTabs from 'views/MyTabs';
import AboutUs from 'views/AboutUs.js';
import ContactUs from 'views/ContactUs.js';
import Disclaimer from 'views/Disclaimer.js';
import OrdersHistoryPage from 'views/OrdersHistoryPage';
import BookshelfPage from 'views/BookshelfPage';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/*<Route path="/index" render={props => <Index {...props} />} />*/}
      <Route
        path="/nucleo-icons"
        render={props => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
      <Route
        path="/home-page"
        render={props => <HomePage {...props} />}
      />
      <Route
        //path="/book-results-page/:genre"
        path={["/book-results-page/:genre", "/book-results-page"]}
        render={props => <BookResultsPage {...props} />}
      />
      <Route
        path="/book-details-page/:id"
        render={props => <BookDetailsPage {...props} />}
      />
      <Route
        path="/read-book-page/:id"
        render={props => <ReadBookPage {...props} />}
      />
      <Route
        path="/book-demo-page/:id"
        render={props => <BookDemoPage {...props} />}
      />
      <Route
        path="/cart-page"///:id"
        render={props => <CartPage {...props} />}
      />
      <Route
        path="/payment-page/:id"
        render={props => <PaymentPage {...props} />}
      />
      <Route
        path="/tabs"
        render={props => <Tabs {...props} />}
      />
      <Route
        path="/my-profile"
        render={props => <MyProfilePage {...props} />}
      />
      <Route
        path="/my-shelf"
        render={props => <MyTabs {...props} />}
      />
      <Route
        path="/about-us"
        render={props => <AboutUs {...props} />}
      />
      <Route
        path="/contact-us"
        render={props => <ContactUs {...props} />}
      />
      <Route
        path="/disclaimer"
        render={props => <Disclaimer {...props} />}
      />
      <Route
      path="/my-orders"
      render={props => <OrdersHistoryPage {...props} />}
      />
      <Route
      path="/my-bookshelf"
      render={props => <BookshelfPage {...props} />}
      />
      <Redirect to="/home-page" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
