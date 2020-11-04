import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import m from '../AutoDismissAlert/messages'
import { createReview } from '../../api/review'
import StarRating from './StarRating'
import { FaComments, FaStar } from 'react-icons/fa'

const ReviewPost = props => {
  const { profile, user, msgAlert, setReceiver } = props
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
    const handleChange = e => setReview({ ...review, ...{ [e.target.name]: e.target.value } })
    const handleSubmit = e => {
      e.preventDefault(); createReview(review, user.token).then(() => {
        msgAlert({
          heading: 'Review Created!',
          message: m.reviewPost,
          variant: 'success'
        }); handleClose()
      }).catch(e => msgAlert({
        heading: 'Review Failed: ' + e.message,
        message: m.reviewPostFail,
        variant: 'danger'
      }))
    }
    return (
      <div>
        <Button
          href={`#chat?name=${user.name}&room=${profile.owner.name + ' and ' + user.name}`}
          onClick={() => setReceiver(profile.owner._id)} variant="outline-success">
          <FaComments/> Message
        </Button>
        <Button variant="outline-info" onClick={handleShow}><FaStar/> Review</Button>
        <Modal centered show={show} onHide={handleClose}>
          <Modal.Header closeButton><Modal.Title>Post Review</Modal.Title></Modal.Header>
          <Form onSubmit={handleSubmit}>
            <Modal.Body>
              <StarRating review={review} setReview={setReview} />
              <Form.Group controlId="content">
                <Form.Control
                  as="textarea" name="content" rows="3"
                  value={review.content} onChange={handleChange}
                  placeholder="Tell us what you think!"/>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer><Button type="Submit" variant="primary">Save</Button></Modal.Footer>
          </Form>
        </Modal>
      </div>
    )
  } else {
    return <span className="small-text text-muted italic">Log in to write a review</span>
  }
}

export default ReviewPost
