import React, {Component} from 'react';
import autobind from 'autobind-decorator';
import { Link } from 'react-router';

import {
  Nav,
  Navbar,
  NavItem,
} from 'react-bootstrap';

@autobind
class MainLayout extends Component {
  render () {
    return (
      <div className='main-layout'>
        <Navbar style={{position: 'fixed', zIndex: 99999, width: '100%'}}>
          <Navbar.Header>
            <Navbar.Brand>
            <Link to='/'>The Daily Rage</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
          </Nav>
        </Navbar>
        <div style={{paddingTop: '50px'}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default MainLayout;
