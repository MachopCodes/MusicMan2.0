import React from 'react'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import m from '../AutoDismissAlert/messages'
import { deleteProfile } from '../../api/profile'
import { FaTrash } from 'react-icons/fa'

const DeleteProfile = props => {
  const handleSubmit = e => {
    e.preventDefault()
    deleteProfile(props.match.params.id, props.user.token)
      .then(() => props.msgAlert({
        heading: 'Delete Success',
        message: m.profDel,
        variant: 'success'
      }))
      .then(() => props.history.push('/'))
      .catch(e => props.msgAlert({
        heading: 'Failed to delete: ' + e.message,
        message: m.profDelFail,
        variant: 'danger'
      }))
  }
  return (
    <Button
      className="button-group"
      variant="outline-danger btn-block"
      onClick={handleSubmit}>
      <FaTrash/> Delete Profile
    </Button>
  )
}

export default withRouter(DeleteProfile)
