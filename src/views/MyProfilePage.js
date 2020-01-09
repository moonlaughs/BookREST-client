import React from "react";

import { Container } from "reactstrap";

import HomePageNavbar from "components/Navbars/HomePageNavbar.js";
import HomePageHeader from "components/Headers/HomePageHeader.js";
import Footer from "components/Footers/Footer.js";
import MyTabs from "views/MyTabs";
import EditProfile from "./EditProfile";

export default class MyProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: [],
      selectedfile: null
    };
  }

  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    });
  };

  componentDidMount() {
    fetch(
      `https://bookstry20191122022423.azurewebsites.net/api/person/` + localStorage.getItem("personId")
    )
      .then(response => response.json())
      .then(data => this.setState({ person: data }));
  }

  render() {
    var { person } = this.state;

    return (
      <>
        <HomePageNavbar />
        <HomePageHeader />
        <div className="section profile-content">
          <Container>
            <div className="owner">
              <div className="avatar">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={person.userPhoto}
                />
              </div>
              <br></br>
              <div className="name">
                <h4 className="title">{person.username}</h4>
              </div>
            </div>
            <row className="myRow">
              <div className="editDiv">
                <EditProfile/>
              </div> 
            </row>
            <br />
          </Container>
        </div>
        <Footer />
      </>
    );
  }
}
