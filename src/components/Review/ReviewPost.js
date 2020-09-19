import React, { Fragment, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import messages from '../AutoDismissAlert/messages'
import { createReview } from '../../api/review'
import StarRating from './StarRating'

const ReviewPost = props => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [review, setReview] = useState({
    content: '',
    rating: null,
    profileId: props.profileId
  })

  const handleChange = e => {
    e.preventDefault()
    const updatedField = { [e.target.name]: e.target.value }
    setReview({ ...review, ...updatedField })
  }

  const handleSubmit = e => {
    e.preventDefault()
    createReview(review, props.user.token)
      .then(() => {
        props.msgAlert({
          heading: 'Review Created!',
          message: messages.createProfileSuccuess,
          variant: 'success'
        })
        handleClose()
      })
      .catch(error => {
        props.msgAlert({
          heading: 'Review Create Failed: ' + error.message,
          message: messages.createProfileFailure,
          variant: 'danger'
        })
      })
  }
  if (props.user) {
    return (
      <Fragment>
        <Button variant="primary" onClick={handleShow}>Post Review</Button>
        <Modal centered show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Post Review</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit}>
            <Modal.Body>
              <StarRating
                rating={review}
                setReview={setReview} />
              <Form.Group controlId="content">
                <Form.Control
                  as="textarea"
                  name="content"
                  rows="3"
                  value={review.content}
                  onChange={handleChange}
                  placeholder="Tell us what you think of this user!"
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button type="Submit" variant="primary" >Save</Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Fragment>
    )
  } else {
    return (<Fragment>Log in to write a review</Fragment>)
  }
}

export default ReviewPost
