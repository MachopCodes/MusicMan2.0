import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getProfile } from '../../api/profile'
import { Card, Button } from 'react-bootstrap'
import messages from '../AutoDismissAlert/messages'
import ProfileCard from '../Profile/ProfileCards'

const Settings = props => {
  const { user, msgAlert } = props
  const [data, setData] = useState()

  useEffect(() => {
    getProfile(user._id)
      .then(response => setData(response.data))
      .catch(error => {
        msgAlert({
          heading: 'Edit Failure: ' + error.message,
          message: messages.showProfileFailure,
          variant: 'danger'
        })
      })
  }, [])

  let jsx; if (data) {
    jsx = <ProfileCard {...props} list={data.profile} msgAlert={msgAlert} user={user} />
  }

  return (
    <section>
      <h2>Account Information</h2>
      <Card>
        <Card.Body>
          <Card.Text>email: {user.email}</Card.Text>
          <Card.Text>username: {user.name}</Card.Text>
          <Card.Text><Link to='/change-password'>Change Password</Link></Card.Text>
        </Card.Body>
      </Card>
      <br/>
      <h2>Profile Information</h2>
      <span>{jsx}</span>
      <Link to="/profiles"><Button variant="outline-success">Create New Profile</Button></Link>
    </section>
  )
}

export default Settings
