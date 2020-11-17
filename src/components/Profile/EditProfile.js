import React, { useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import m from '../AutoDismissAlert/messages'
import { editProfile } from '../../api/profile'
import DeleteProfile from './DeleteProfile'
import Instruments from './Form/Instruments'
import Interests from './Form/Interests'
import State from './Form/State'
import Blurb from './Form/Blurb'
import City from './Form/City'
import { FaUserEdit } from 'react-icons/fa'

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
    const updatedField = { [e.target.name]: e.target.value }
    setProfile({ ...profile, ...updatedField })
  }

  const handleSubmit = e => {
    e.preventDefault()
    editProfile(profile, _id, user.token).then(() => {
      msgAlert({
        heading: 'Edit Success',
        message: m.profPatch,
        variant: 'success'
      }); history.push('/')
    }).catch(e => msgAlert({
      heading: 'Edit Failure: ' + e.message,
      message: m.profPatchFail,
      variant: 'danger'
    }))
  }
  return (
    <section>
      <Container>
        <Row>
          <Col xl={4} lg={6} md={8} sm={10} xs={12} className="mx-auto">
            <h2 className="brand-sub">Edit Profile</h2>
            <Form onSubmit={handleSubmit}>
              <br/><Interests change={handleChange}/><br/>
              <City city={profile.city} change={handleChange}/>
              <State state={profile.state} change={handleChange}/>
              <Instruments change={handleChange}/>
              <Blurb blurb={profile.blurb} change={handleChange}/>
              <Row>
                <Col>
                  <Button className="button-group mr-auto" type="Submit" variant="outline-success btn-block">
                    <FaUserEdit/> Edit Profile
                  </Button>
                </Col>
                <Col><DeleteProfile {...props} /></Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default EditProfile
