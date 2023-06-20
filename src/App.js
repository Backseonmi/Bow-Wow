import React, { useState } from 'react';
import { Link, Route, useLocation } from 'react-router-dom';
import Main from './main/Main';
import Abandoned from './abandoned/Abandoned';
import Login from './login/Login';
import CommunityList from './community/CommunityList';
import CommunityWrite from './community/CommunityWrite';
import CommunityDetail from './community/CommunityDetail';
import logo from './assets/footprint.png';
import Shelter from './Shelter/Shelter';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Location1 from './location/Location1'
import Location2 from './location/Location2';
import Location3 from './location/Location3';
import Location4 from './location/Location4';
import Location5 from './location/Location5';
import Location6 from './location/Location6';
import Location7 from './location/Location7';
import Location8 from './location/Location8';
import Location9 from './location/Location9';
import Location10 from './location/Location10';

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar bg="light" variant="light" sticky='top'>
        <Container>
          <Navbar.Brand href="/home" >
          <img src={logo} className='logo' alt="logo" width="60" height="60"/>{' '}
              멍주인
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" className={location.pathname === '/home' ? 'active' : ''}>홈 ㅡ</Nav.Link>
            <Nav.Link as={Link} to="/abandoned" className={location.pathname === '/abandoned' ? 'active' : ''}>키워줘멍</Nav.Link>
            <Nav.Link as={Link} to="/community" className={location.pathname === '/community' ? 'active' : ''}>멍멍</Nav.Link>
            <Nav.Link as={Link} to="/shelter" className={location.pathname === '/shelter' ? 'active' : ''}>보러와멍</Nav.Link>
            <Nav.Link as={Link} to="/login" className={location.pathname === '/login' ? 'active' : ''}>나의멍</Nav.Link>

          </Nav>
        </Container>
      </Navbar>

      <Route exact path="/" render={() => <Main />} />
      <Route exact path="/home" render={() => <Main />} />
      <Route exact path="/abandoned" render={() => <Abandoned />} />
      <Route exact path="/shelter" render={() => <Shelter />} />
      <Route exact path="/community" render={() => <CommunityList />} />
      <Route exact path="/community/write" component={CommunityWrite} />
      <Route path="/community/detail/:postId" component={CommunityDetail} />
      <Route exact path="/login" render={() => <Login />} />

      <Route exact path="/Location1" render={() => <Location1 />} />
      <Route exact path="/Location2" render={() => <Location2 />} />
      <Route exact path="/Location3" render={() => <Location3 />} />
      <Route exact path="/Location4" render={() => <Location4 />} />
      <Route exact path="/Location5" render={() => <Location5 />} />
      <Route exact path="/Location6" render={() => <Location6 />} />
      <Route exact path="/Location7" render={() => <Location7 />} />
      <Route exact path="/Location8" render={() => <Location8 />} />
      <Route exact path="/Location9" render={() => <Location9 />} />
      <Route exact path="/Location10" render={() => <Location10 />} />
    </>
  );
}

export default App;