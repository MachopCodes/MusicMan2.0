import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../../icons/wa-logo.png'

const Footer = ({ user }) => {
  let name
  if (user) {
    user.name.includes(' ')
      ? name = user.name.substr(0, user.name.indexOf(' '))
      : name = user.name
  }
  return (
    <Navbar className="d-flex" bg="light" fixed="bottom" style={{ color: 'grey', textAlign: 'right' }}>
      <Nav className="mr-auto">{ user && <span className="navbar-text mr-2">Hi, {name}!</span>}</Nav>
      <Navbar.Brand href="/" className="nav-logo"><img alt="" className="logo-img ml-1%" src={logo} /></Navbar.Brand>
    </Navbar>
  )
}

export default Footer
