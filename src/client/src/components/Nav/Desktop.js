import React from 'react'
import {Navbar} from 'react-bootstrap'

const NavDesktop = NavItems =>
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Pynews</a>
      </Navbar.Brand>
    </Navbar.Header>
    {NavItems({pullRight: true})}
  </Navbar>

export default NavDesktop
