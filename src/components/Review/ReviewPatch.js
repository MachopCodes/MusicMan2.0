import React, { Fragment, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import messages from '../AutoDismissAlert/messages'
import { editReview } from '../../api/review'
import StarRating from './StarRating'
import ReviewDelete from './ReviewDelete'

const ReviewPatch = props => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [review, setReview] = useState({
    content: props.review.content,
    rating: props.review.rating,
    profileId: props.profileId
  })

  const handleChange = e => {
    e.preventDefault()
    const updatedField = { [e.target.name]: e.target.value }
    setReview({ ...review, ...updatedField })
  }

  const handleSubmit = e => {
    e.preventDefault()
    editReview(review, props.review._id, props.user.token)
      .then(() => {
        props.msgAlert({
          heading: 'Review Created!',
          message: messages.createProfileSuccuess,
          variant: 'success'
        })
        handleClose()
        props.history.push('/')
      })
      .catch(error => {
        props.msgAlert({
          heading: 'Review Create Failed: ' + error.message,
          message: messages.createProfileFailure,
          variant: 'danger'
        })
      })
  }
  if (props.user && props.user._id === props.review.reviewer) {
    return (
      <Fragment>
        <Button variant="primary" onClick={handleShow}>Edit Review</Button>
        <Modal centered show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Review</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit}>
            <Modal.Body>
              <StarRating
                review={review}
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
              <ReviewDelete
                {...props}
                user={props.user}
                msgAlert={props.msgAlert}
                review={props.review} />
            </Modal.Footer>
          </Form>
        </Modal>
      </Fragment>
    )
  } else {
    return (<Fragment></Fragment>)
  }
}

export default ReviewPatch
