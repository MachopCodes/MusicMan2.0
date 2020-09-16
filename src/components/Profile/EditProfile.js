import React, { Fragment, useState } from 'react'
import { editProfile } from '../../api/profile'
import messages from '../AutoDismissAlert/messages'
import { Button, Form } from 'react-bootstrap'
import DeleteProfile from './DeleteProfile'

const EditProfile = props => {
  const [profile, setProfile] = useState({
    name: props.profile.name,
    contact: props.profile.contact,
    location: props.profile.location,
    instrument: props.profile.instruments,
    interest: props.profile.interests,
    blurb: props.profile.blurb,
    id: props.profile._id
  })

  const handleChange = e => {
    e.preventDefault()
    const updatedField = { [e.target.name]: e.target.value }
    setProfile({ ...profile, ...updatedField })
  }

  const handleSubmit = e => {
    e.preventDefault()
    editProfile(profile, props._id, props.user.token)
      .then(() => {
        console.log('success!! profile is: ', profile)
        props.msgAlert({
          heading: 'Edit Success',
          message: messages.editProfileSuccess,
          variant: 'success'
        })
        history.push('/')
      })
      .catch(error => {
        props.msgAlert({
          heading: 'Edit Failure: ' + error.message,
          message: messages.editProfileFailure,
          variant: 'danger'
        })
      })
  }

  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>name</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="enter name"
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
        <Form.Group controlId="instrument">
          <Form.Label>instruments</Form.Label>
          <Form.Control
            required
            type="text"
            name="instrument"
            value={profile.instrument}
            onChange={handleChange}
            placeholder="Enter instrument"
          />
        </Form.Group>
        <Form.Group controlId="interest">
          <Form.Label>interest</Form.Label>
          <Form.Control
            required
            type="text"
            name="interest"
            value={profile.interest}
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
        <DeleteProfile {...props} />
      </Form>
    </Fragment>
  )
}

export default EditProfile
