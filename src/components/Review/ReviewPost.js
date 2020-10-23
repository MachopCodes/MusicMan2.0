import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Modal } from 'react-bootstrap'
import messages from '../AutoDismissAlert/messages'
import { createReview } from '../../api/review'
import StarRating from './StarRating'

const ReviewPost = props => {
  const { profile, user, msgAlert } = props
  if (user) {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const [review, setReview] = useState({
      content: '',
      rating: null,
      profileId: profile._id,
      reviewerName: user.name,
      reviewerId: user._id
    })

    const handleChange = e => {
      const updatedField = { [e.target.name]: e.target.value }
      setReview({ ...review, ...updatedField })
    }

    const handleSubmit = e => {
      e.preventDefault()
      createReview(review, user.token)
        .then(() => {
          msgAlert({
            heading: 'Review Created!',
            message: messages.createReviewSuccess,
            variant: 'success'
          })
          handleClose()
        })
        .catch(error => {
          msgAlert({
            heading: 'Review Create Failed: ' + error.message,
            message: messages.createReviewFailure,
            variant: 'danger'
          })
        })
    }
    return (
      <Fragment>
        <Link to={`/chat?name=${user.name}&room=${profile.owner.name}&to=${profile.owner._id}`}>
          <Button variant="success">Message</Button>
        </Link>
        <Button variant="primary" onClick={handleShow}>Review</Button>
        <Modal centered show={show} onHide={handleClose}>
          <Modal.Header closeButton><Modal.Title>Post Review</Modal.Title></Modal.Header>
          <Form onSubmit={handleSubmit}>
            <Modal.Body>
              <StarRating review={review} setReview={setReview} />
              <Form.Group controlId="content">
                <Form.Control as="textarea" name="content" rows="3" value={review.content} onChange={handleChange} placeholder="Tell us what you think!"/>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer><Button type="Submit" variant="primary">Save</Button></Modal.Footer>
          </Form>
        </Modal>
      </Fragment>
    )
  } else {
    return (<Fragment>Log in to write a review</Fragment>)
  }
}

export default ReviewPost
