import React from 'react'
import {Navbar, Col} from 'react-bootstrap'

const NavMobile = NavItems =>
  <Navbar>
    <Navbar.Toggle />
    <Navbar.Header>
      <Col xs={4} sm={4} xsOffset={2} smOffset={4}>
        <Navbar.Brand>
          <a href="/">Pynews</a>
        </Navbar.Brand>
      </Col>
    </Navbar.Header>
    <Navbar.Collapse>
      {NavItems({pullRight: false})}
    </Navbar.Collapse>
  </Navbar>

export default NavMobile
