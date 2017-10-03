import React from 'react';
import ReactDOM from 'react-dom';
import UserHeader from './UserHeader.jsx'
import AboutMe from './AboutMe.jsx'
import Tracks from './Tracks.jsx'
import Albums from './Albums.jsx'
import Collaboration from './Collaboration.jsx'
import { Grid, Row, Col } from 'react-bootstrap'
import $ from 'jquery';
const user = require('../data/user_data.js');
const profile = require('../data/profile_data.js');

export default class Musician extends React.Component {
 constructor(props) {
    super(props);

    this.state = {
      profile: profile,
      user: user,
      songs: [],
      albums: [],
      collaboration: ''
    };

  }

  render() {
    return (
      <Grid>
        <Row >
          <Col className="user"> <UserHeader/> </Col>
        </Row>
        <Row>
          <Col xs={6} md={6} className="about-me"> <AboutMe aboutme={this.state.profile}/> </Col>
          <Col xs={6} md={6} className="recent-track"> <Tracks/> </Col>
        </Row>
        <Row>
          <Col xs={6} md={6} className="collaboration"> <Collaboration/> </Col>
          <Col xs={6} md={6} className="albums"> <Albums/>  </Col>
        </Row>
      </Grid>
    );
  }
}



