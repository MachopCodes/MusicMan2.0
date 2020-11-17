import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { FaMusic, FaUser, FaEnvelope, FaSignOutAlt, FaSignInAlt } from 'react-icons/fa'

const auth = (
  <Fragment>
    <Nav.Link className="settings" href="#settings">
      <FaUser data-toggle="tooltip" title="User Settings"/>
    </Nav.Link>
    <Nav.Link href="#messages">
      <FaEnvelope data-toggle="tooltip" title="Inbox"/>
    </Nav.Link>
    <Nav.Link className="sign-out" href="#sign-out">
      <FaSignOutAlt data-toggle="tooltip" title="Sign Out"/>
    </Nav.Link>
  </Fragment>
)
const signIn = (
  <Nav.Link className="sign-in" href="#sign-in">
    <FaSignInAlt data-toggle="tooltip" title="Sign In"/>
  </Nav.Link>
)

const Header = ({ user }) => (
  <Navbar sticky="top" bg="light" variant="light" expand="md">
    <Navbar.Brand data-toggle="tooltip" title="Search" href="#" className="brand-nav search">
      <FaMusic className="small"/> musicman <FaMusic className="small"/>
    </Navbar.Brand>
    <Nav className="ml-auto">{ user ? auth : signIn }</Nav>
  </Navbar>
)

export default Header
