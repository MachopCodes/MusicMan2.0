import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getProfile } from '../../api/profile'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import m from '../AutoDismissAlert/messages'
import ProfileCard from '../Profile/Cards/ProfileCards'
import { FaUserPlus } from 'react-icons/fa'

const Settings = props => {
  const { user, msgAlert } = props; const [data, setData] = useState(); if (user) {
    useEffect(() => {
      getProfile(user._id).then(res => setData(res.data)).catch(e => {
        msgAlert({ heading: 'Edit Failure: ' + e.message, message: m.profGetFail, variant: 'danger' })
      })
    }, []); let jsx; if (data) {
      jsx = <ProfileCard {...props} list={data.profile} msgAlert={msgAlert} user={user} />
    }; return (
      <section>
        <Container>
          <Row>
            <Col xl={4} lg={6} md={8} sm={10} xs={12} className="mx-auto">
              <h4 className="text-center">Account Information</h4><br/>
              <Card>
                <Card.Body>
                  <Card.Text className="text-center">email: {user.email}</Card.Text>
                  <Card.Text className="text-center">username: {user.name}</Card.Text>
                  <Card.Text className="text-center"><Link to='/change-password'>Change Password</Link></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row><Col xl={4} lg={6} md={8} sm={10} xs={12} className="mx-auto">{jsx}</Col></Row>
          <Row>
            <Col xl={4} lg={6} md={8} sm={10} xs={12} className="mx-auto">
              <Link to="/profiles"><Button variant="primary btn-block"><FaUserPlus/> Create New Profile</Button></Link>
            </Col>
          </Row>
        </Container>
      </section>
    )
  } else { return <section><h6>You must sign in to access this page</h6></section> }
}

export default Settings
