import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { createProfile } from '../../api/profile'
import messages from '../AutoDismissAlert/messages'
import Name from './Form/Name'
import Blurb from './Form/Blurb'
import City from './Form/City'
import Instruments from './Form/Instruments'
import Interests from './Form/Interests'
import State from './Form/State'

const CreateProfile = props => {
  const [profile, setProfile] = useState({
    name: '',
    city: '',
    state: '',
    instrument: '',
    interest: '',
    blurb: ''
  })

  const handleChange = e => {
    e.preventDefault()
    const updatedField = { [e.target.name]: e.target.value }
    setProfile({ ...profile, ...updatedField })
  }

  const handleSubmit = e => {
    e.preventDefault()
    createProfile(profile, props.user.token)
      .then(() => {
        props.msgAlert({
          heading: 'Profile Created!',
          message: messages.createProfileSuccuess,
          variant: 'success'
        })
        props.history.push('/')
      })
      .catch(error => {
        props.msgAlert({
          heading: 'Profile Create Failed: ' + error.message,
          message: messages.createProfileFailure,
          variant: 'danger'
        })
      })
  }

  return (
    <section className="text-light">
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col><Name name={profile.name} change={handleChange}/></Col>
            <Col><City city={profile.city} change={handleChange}/></Col>
            <Col><State state={profile.state} change={handleChange}/></Col>
          </Row>
          <Row>
            <Col><Instruments change={handleChange}/></Col>
            <Col><Interests change={handleChange}/></Col>
          </Row>
          <Row>
            <Col><Blurb blurb={profile.blurb} change={handleChange}/></Col>
          </Row>
          <Row>
            <Col>
              <Button type="Submit" variant="dark" className="mr-auto">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  )
}

export default CreateProfile
