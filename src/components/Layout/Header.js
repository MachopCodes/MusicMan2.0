import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { FaSearch, FaUser, FaEnvelope, FaSignOutAlt, FaSignInAlt } from 'react-icons/fa'

const auth = (
  <Fragment>
    <Nav.Link href="#settings"><FaUser/></Nav.Link>
    <Nav.Link href="#messages"><FaEnvelope/></Nav.Link>
    <Nav.Link href="#sign-out"><FaSignOutAlt/></Nav.Link>
  </Fragment>
)

const signIn = <Nav.Link href="#sign-in"><FaSignInAlt/></Nav.Link>
const search = <Nav.Link href="#/"><FaSearch/></Nav.Link>

const Header = ({ user }) => (
  <Navbar sticky="top" bg="light" variant="light" expand="md">
    <Navbar.Brand href="#" className="brand-nav">musicman</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">{ search }{ user ? auth : signIn }</Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
