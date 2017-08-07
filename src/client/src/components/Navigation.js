import React from 'react'
import {Navbar, Nav, NavItem, Col} from 'react-bootstrap'
import {compose, withProps} from 'recompose'
import withSizes from 'react-sizes'
import {LinkContainer} from 'react-router-bootstrap'
import '../assets/css/navigation.css'

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

const NavigationDesktop = NavItems =>
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Pynews</a>
      </Navbar.Brand>
    </Navbar.Header>
    {NavItems({pullRight: true})}
  </Navbar>

const NavigationMobile = NavItems =>
  <Navbar>
    <Navbar.Toggle />
    <Navbar.Header>
      <Col xs={4} xsOffset={2}>
        <Navbar.Brand>
          <a href="/">Pynews</a>
        </Navbar.Brand>
      </Col>
    </Navbar.Header>
    <Navbar.Collapse>
      {NavItems({pullRight: false})}
    </Navbar.Collapse>
  </Navbar>

const Navigation = ({NavItems, isMobile}) =>
  isMobile ? NavigationMobile(NavItems) : NavigationDesktop(NavItems)

export default compose(
  withProps({
    NavItems
  }),
  withSizes(({width}) => ({isMobile: width < 480}))
)(Navigation)
