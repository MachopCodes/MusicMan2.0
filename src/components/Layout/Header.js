import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const auth = (
  <Fragment>
    <Nav.Link href="#settings">Account</Nav.Link>
    <Nav.Link href="#messages">Messages</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const signIn = <Nav.Link href="#sign-in">Sign In</Nav.Link>
const search = <Nav.Link href="#/">Search</Nav.Link>

const Header = ({ user }) => (
  <Navbar bg="light" variant="light" expand="md">
    <Navbar.Brand href="#" className="brand-nav">musicman</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Hello, {user.name}</span>}
        { search }
        { user ? auth : signIn }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
