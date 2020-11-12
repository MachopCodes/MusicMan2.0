import React from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap'
import logo from '../../icons/wa-logo.png'

const Footer = () => (
  <div className="footer">
    <hr/>
    <Navbar bg="light" fixed="bottom" style={{ color: 'grey', textAlign: 'right' }}>
      <Nav className="ml-auto">
        <Image className="logo-img ml-auto" src={logo} alt=""></Image>
      </Nav>
    </Navbar>
  </div>
)

export default Footer
