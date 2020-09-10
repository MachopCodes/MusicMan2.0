import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { createProfile } from '../../api/profile'
import messages from '../AutoDismissAlert/messages'

const CreateProfile = props => {
  const [profile, setProfile] = useState({
    name: '',
    contact: '',
    location: '',
    instruments: '',
    interests: '',
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
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>name</Form.Label>
        <Form.Control
          required
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          placeholder="Enter Name"
        />
      </Form.Group>
      <Form.Group controlId="contact">
        <Form.Label>Contact</Form.Label>
        <Form.Control
          required
          type="text"
          name="contact"
          value={profile.contact}
          onChange={handleChange}
          placeholder="Enter Contact"
        />
      </Form.Group>
      <Form.Group controlId="location">
        <Form.Label>location</Form.Label>
        <Form.Control
          required
          type="text"
          name="location"
          value={profile.location}
          onChange={handleChange}
          placeholder="Enter location"
        />
      </Form.Group>
      <Form.Group controlId="instruments">
        <Form.Label>instruments</Form.Label>
        <Form.Control
          required
          type="text"
          name="instruments"
          value={profile.instruments}
          onChange={handleChange}
          placeholder="Enter instruments"
        />
      </Form.Group>
      <Form.Group controlId="interests">
        <Form.Label>interests</Form.Label>
        <Form.Control
          required
          type="text"
          name="interests"
          value={profile.interests}
          onChange={handleChange}
          placeholder="Enter interests"
        />
      </Form.Group>
      <Form.Group controlId="blurb">
        <Form.Label>blurb</Form.Label>
        <Form.Control
          required
          type="text"
          name="blurb"
          value={profile.blurb}
          onChange={handleChange}
          placeholder="Enter blurb"
        />
      </Form.Group>
      <Button
        type="Submit"
        variant="dark"
        className="mr-auto">
        Submit
      </Button>
    </Form>
  )
}

export default CreateProfile
