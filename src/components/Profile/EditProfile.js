import React, { Fragment, useState } from 'react'
import { editProfile } from '../../api/profile'
import messages from '../AutoDismissAlert/messages'
import { Button, Form } from 'react-bootstrap'
import DeleteProfile from './DeleteProfile'

const EditProfile = props => {
  console.log('props are: ', props)
  const [profile, setProfile] = useState({
    name: props.profile.name,
    contact: props.profile.contact,
    location: props.profile.location,
    instruments: props.profile.instruments,
    interests: props.profile.interests,
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
        <DeleteProfile {...props} />
      </Form>
    </Fragment>
  )
}

export default EditProfile
