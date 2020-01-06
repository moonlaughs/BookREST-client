import React from "react";

import { Button, Container, Row, Col } from "reactstrap";

import HomePageNavbar from "components/Navbars/HomePageNavbar.js";
import HomePageHeader from "components/Headers/HomePageHeader.js";
import Footer from "components/Footers/Footer.js";
import SettingsButton from "views/SettingsButton.js";
import MyTabs from "views/MyTabs";

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

 /* onClickHandler = () => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    axios
      .post(
        "https://booksstoragepdf.blob.core.windows.net/userprofilephotos/",
        data,
        {
          // receive two    parameter endpoint url ,form data
        }
      )
      .then(res => {
        // then print response status
        console.log(res.statusText);
      });
  }; */

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

              <input type="file" name="file" onChange={this.onChangeHandler} />
              <Button
                type="submit"
                className="btn-link"
                onClick={this.onClickHandler}
              >
                Upload
              </Button>

              <div className="name">
                <h4 className="title">{person.username}</h4>
              </div>
            </div>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <SettingsButton></SettingsButton>
              </Col>
            </Row>
            <br />
            <MyTabs/>
          </Container>
        </div>
        <Footer />
      </>
    );
  }
}
