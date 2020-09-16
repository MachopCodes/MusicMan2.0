import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { createProfile } from '../../api/profile'
import messages from '../AutoDismissAlert/messages'

const CreateProfile = props => {
  const [profile, setProfile] = useState({
    name: '',
    contact: '',
    location: '',
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
    <section className="wallpaper container text-light">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
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
          </Col>
          <Col>
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
          </Col>
          <Col>
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
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="instrument">
              <Form.Label>Instrument</Form.Label>
              <Form.Control required as="select" name="instrument" onChange={handleChange}>
                <option></option>
                <option>Accordion</option>
                <option>Bagpipes</option>
                <option>Banjo</option>
                <option>Bass guitar</option>
                <option>Bassoon</option>
                <option>Bongo</option>
                <option>Cello</option>
                <option>Clarinet</option>
                <option>Didgeridoo</option>
                <option>Drum kit</option>
                <option>Euphonium</option>
                <option>Fiddle</option>
                <option>Flute</option>
                <option>French horn</option>
                <option>Guitar</option>
                <option>Harmonica</option>
                <option>Harp</option>
                <option>Mandolin</option>
                <option>Marimba</option>
                <option>Oboe</option>
                <option>Ocarina</option>
                <option>Organ</option>
                <option>Pan Pipes</option>
                <option>Piano</option>
                <option>Piccolo</option>
                <option>Recorder</option>
                <option>Saxophone</option>
                <option>Sitar</option>
                <option>Singing</option>
                <option>Synthesizer</option>
                <option>Tabla</option>
                <option>Timpani</option>
                <option>Trombone</option>
                <option>Trumpet</option>
                <option>Theremin</option>
                <option>Tuba</option>
                <option>Ukulele</option>
                <option>Viola</option>
                <option>Violin</option>
                <option>Xylophone</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="interest">
              <Form.Label>Interest</Form.Label>
              <Form.Control required as="select" name="interests" onChange={handleChange}>
                <option></option>
                <option>Lessons</option>
                <option>Jams</option>
                <option>Gigs</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="blurb">
              <Form.Label>blurb</Form.Label>
              <Form.Control
                as="textarea"
                name="blurb"
                rows="3"
                value={profile.blurb}
                onChange={handleChange}
                placeholder="Enter blurb"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              type="Submit"
              variant="dark"
              className="mr-auto">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </section>
  )
}

export default CreateProfile
