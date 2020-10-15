import React, { useState } from 'react'
import { editProfile } from '../../api/profile'
import messages from '../AutoDismissAlert/messages'
import { Button, Form, Row, Col } from 'react-bootstrap'
import DeleteProfile from './DeleteProfile'
import Blurb from './Form/Blurb'
import City from './Form/City'
import Instruments from './Form/Instruments'
import Interests from './Form/Interests'
import State from './Form/State'

const EditProfile = props => {
  const { msgAlert, p, _id, user } = props
  const [profile, setProfile] = useState({
    city: p.city,
    state: p.state,
    instrument: p.instrument,
    interest: p.interest,
    blurb: p.blurb
  })

  const handleChange = e => {
    e.preventDefault()
    const updatedField = { [e.target.name]: e.target.value }
    setProfile({ ...profile, ...updatedField })
  }

  const handleSubmit = e => {
    e.preventDefault()
    editProfile(profile, _id, user.token)
      .then(() => {
        msgAlert({
          heading: 'Edit Success',
          message: messages.editProfileSuccess,
          variant: 'success'
        })
        history.push('/')
      })
      .catch(error => {
        msgAlert({
          heading: 'Edit Failure: ' + error.message,
          message: messages.editProfileFailure,
          variant: 'danger'
        })
      })
  }

  return (
    <section className="text-light">
      <Form onSubmit={handleSubmit}>
        <Row>
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
        <DeleteProfile {...props} />
      </Form>
    </section>
  )
}

export default EditProfile
