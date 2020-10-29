import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap'
import m from '../AutoDismissAlert/messages'
import { deleteReview } from '../../api/review'
import { FaTrash } from 'react-icons/fa'

const ReviewDelete = props => {
  const handleSubmit = e => {
    e.preventDefault(); deleteReview(props.review, props.user.token).then(() => {
      props.msgAlert({
        heading: 'Review Deleted!', message: m.reviewDel, variant: 'success'
      }); props.history.push('/')
    }).catch(e => props.msgAlert({
      heading: 'Review Delete Failed: ' + e.message, message: m.reviewDelFail, variant: 'danger'
    }))
  }; return (
    <Fragment>
      <Button type="Submit" variant="danger" onClick={handleSubmit}><FaTrash/></Button>
    </Fragment>
  )
}

export default ReviewDelete
