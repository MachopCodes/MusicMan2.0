import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { createProfile } from '../../api/profile'
import m from '../AutoDismissAlert/messages'
import Blurb from './Form/Blurb'
import City from './Form/City'
import Instruments from './Form/Instruments'
import Interests from './Form/Interests'
import State from './Form/State'
import { FaUserPlus } from 'react-icons/fa'

const CreateProfile = ({ user, msgAlert, history }) => {
  const [profile, setProfile] = useState({
    city: '', state: '', instrument: '', interest: '', blurb: ''
  }); const handleChange = e => {
    const updatedField = { [e.target.name]: e.target.value }
    setProfile({ ...profile, ...updatedField })
  }; const handleSubmit = e => {
    e.preventDefault(); createProfile(profile, user.token).then(() => {
      msgAlert({
        heading: 'Profile Created!', message: m.profPost, variant: 'success'
      }); history.push('/')
    }).catch(e => {
      msgAlert({
        heading: 'Profile Create Failed: ' + e.message, message: m.profPostFail, variant: 'danger'
      })
    })
  }; return (
    <section className="text-light">
      <Container>
        <Row>
          <Col xl={4} lg={6} md={8} sm={10} xs={12} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <City city={profile.city} change={handleChange}/>
              <State state={profile.state} change={handleChange}/>
              <Instruments change={handleChange}/>
              <Interests change={handleChange}/>
              <Blurb blurb={profile.blurb} change={handleChange}/>
              <Button type="Submit" variant="primary btn-block"><FaUserPlus/> Create Profile</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CreateProfile
