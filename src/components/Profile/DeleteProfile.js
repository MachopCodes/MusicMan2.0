import React from 'react'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import messages from '../AutoDismissAlert/messages'
import apiUrl from '../../apiConfig'
import axios from 'axios'

const DeleteProfile = props => {
  // console.log('props in delete profile are: ', props)
  const deleteProfile = () => {
    return axios({
      url: apiUrl + `/profiles/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
  }
  const handleSubmit = e => {
    e.preventDefault()
    deleteProfile()
      .then(() => props.msgAlert({
        heading: 'Delete Success',
        message: messages.profileDeleteSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(err => props.msgAlert({
        heading: 'Failed to delete: ' + err.message,
        message: messages.profileDeleteFailure,
        variant: 'danger'
      }))
  }
  return (
    <Button
      variant="danger"
      onClick={handleSubmit}>
      Delete Profile
    </Button>
  )
}

export default withRouter(DeleteProfile)
