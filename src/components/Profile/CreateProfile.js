import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { createProfile } from '../../api/profile'
import messages from '../AutoDismissAlert/messages'
import Blurb from './Form/Blurb'
import City from './Form/City'
import Instruments from './Form/Instruments'
import Interests from './Form/Interests'
import State from './Form/State'

const CreateProfile = ({ user, msgAlert, history }) => {
  const [profile, setProfile] = useState({
    city: '', state: '', instrument: '', interest: '', blurb: ''
  })

  const handleChange = e => {
    const updatedField = { [e.target.name]: e.target.value }
    setProfile({ ...profile, ...updatedField })
  }

  const handleSubmit = e => {
    e.preventDefault(); createProfile(profile, user.token)
      .then(() => {
        msgAlert({
          heading: 'Profile Created!',
          message: messages.createProfileSuccuess,
          variant: 'success'
        }); history.push('/')
      })
      .catch(error => {
        msgAlert({
          heading: 'Profile Create Failed: ' + error.message,
          message: messages.createProfileFailure,
          variant: 'danger'
        })
      })
  }

  return (
    <section className="text-light">
      <Container>
        <Row>
          <Col xl={4} lg={6} md={8} sm={10} xs={12}>
            <Form onSubmit={handleSubmit}>
              <City city={profile.city} change={handleChange}/>
              <State state={profile.state} change={handleChange}/>
              <Instruments change={handleChange}/>
              <Interests change={handleChange}/>
              <Blurb blurb={profile.blurb} change={handleChange}/>
              <Button type="Submit" variant="outline-info btn-block">Create Profile</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CreateProfile
