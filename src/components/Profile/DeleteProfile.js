import React from 'react'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import messages from '../AutoDismissAlert/messages'
import { deleteProfile } from '../../api/profile'

const DeleteProfile = props => {
  const handleSubmit = e => {
    e.preventDefault()
    deleteProfile(props.match.params.id, props.user.token)
      .then(() => props.msgAlert({
        heading: 'Delete Success',
        message: messages.profileDeleteSuccess,
        variant: 'success'
      }))
      .then(() => props.history.push('/'))
      .catch(err => props.msgAlert({
        heading: 'Failed to delete: ' + err.message,
        message: messages.profileDeleteFailure,
        variant: 'danger'
      }))
  }
  return <Button variant="danger" onClick={handleSubmit}>Delete Profile</Button>
}

export default withRouter(DeleteProfile)
