import React from 'react'
import {Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const NavItems = ({pullRight}) =>
  <Nav pullRight={pullRight}>
    <LinkContainer to="/politics">
      <NavItem eventKey={1}>POLITICS</NavItem>
    </LinkContainer>
    <LinkContainer to="/business">
      <NavItem eventKey={2}>BUSINESS</NavItem>
    </LinkContainer>
    <LinkContainer to="/technology">
      <NavItem eventKey={3}>TECH</NavItem>
    </LinkContainer>
    <LinkContainer to="/science-and-nature">
      <NavItem eventKey={4}>SCIENCE</NavItem>
    </LinkContainer>
    <LinkContainer to="/sport">
      <NavItem eventKey={5}>SPORTS</NavItem>
    </LinkContainer>
    <NavItem eventKey={6}>LOGIN</NavItem>
  </Nav>

export default NavItems
