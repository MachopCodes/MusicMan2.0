import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap'
import messages from '../AutoDismissAlert/messages'
import { deleteReview } from '../../api/review'

const ReviewDelete = props => {
  const handleSubmit = e => {
    e.preventDefault()
    deleteReview(props.review, props.user.token)
      .then(() => {
        props.msgAlert({
          heading: 'Review Deleted!',
          message: messages.createProfileSuccuess,
          variant: 'success'
        })
        props.history.push('/')
      })
      .catch(error => {
        props.msgAlert({
          heading: 'Review Delete Failed: ' + error.message,
          message: messages.createProfileFailure,
          variant: 'danger'
        })
      })
  }
  return (
    <Fragment>
      <Button
        type="Submit"
        variant="danger"
        onClick={handleSubmit}>Delete Review</Button>
    </Fragment>
  )
}

export default ReviewDelete
