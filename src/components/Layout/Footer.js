import React from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap'
import logo from '../../icons/wa-logo.png'

const Footer = ({ user }) => (
  <div className="footer">
    <hr/>
    <Navbar bg="light" fixed="bottom" style={{ color: 'grey', textAlign: 'right' }}>
      <Nav className="mr-auto">{ user && <span className="navbar-text mr-2">Hello, {user.name}</span>}</Nav>
      <Navbar.Brand href="/"><Image className="logo-img ml-1%" src={logo} alt=""></Image></Navbar.Brand>
    </Navbar>
  </div>
)

export default Footer
