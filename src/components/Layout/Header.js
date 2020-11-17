import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { FaSearch, FaUser, FaEnvelope, FaSignOutAlt, FaSignInAlt } from 'react-icons/fa'

const auth = (
  <Fragment>
    <Nav.Link className="settings" href="#settings"><FaUser/></Nav.Link>
    <Nav.Link href="#messages"><FaEnvelope/></Nav.Link>
    <Nav.Link className="sign-out" href="#sign-out"><FaSignOutAlt/></Nav.Link>
  </Fragment>
)

const signIn = <Nav.Link className="sign-in" href="#sign-in"><FaSignInAlt/></Nav.Link>
const search = <Nav.Link className="search" href="#/"><FaSearch/></Nav.Link>

const Header = ({ user }) => (
  <Navbar sticky="top" bg="light" variant="light" expand="md">
    <Navbar.Brand href="#" className="brand-nav">musicman</Navbar.Brand>
    <Nav className="ml-auto">{ search }{ user ? auth : signIn }</Nav>
  </Navbar>
)

export default Header
