import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import m from '../AutoDismissAlert/messages'
import { editReview } from '../../api/review'
import StarRating from './StarRating'
import ReviewDelete from './ReviewDelete'
import { FaEdit } from 'react-icons/fa'

const ReviewPatch = props => {
  const { user, review, history, msgAlert, profileId } = props
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [r, setR] = useState({ content: review.content, rating: review.rating, profileId: profileId })
  const handleChange = e => {
    const updatedField = { [e.target.name]: e.target.value }
    setR({ ...r, ...updatedField })
  }
  const handleSubmit = e => {
    e.preventDefault(); editReview(r, review._id, user.token).then(() => {
      msgAlert({ heading: 'Review Edited!', message: m.reviewPatch, variant: 'success' }); handleClose(); history.push('/')
    }).catch(e => msgAlert({ heading: 'Review Edit Failed: ' + e.message, message: m.reviewPatchFail, variant: 'danger' }))
  }
  if (user && user._id === review.reviewerId) {
    return (
      <div className="mx-auto align-items-center d-flex justify-content-center">
        <Button variant="outline-success" onClick={handleShow}><FaEdit/> Edit Review</Button>
        <Modal centered show={show} onHide={handleClose}>
          <Modal.Header closeButton><Modal.Title>Edit Review</Modal.Title></Modal.Header>
          <Form onSubmit={handleSubmit}>
            <Modal.Body>
              <StarRating review={r} setReview={setR} />
              <Form.Group controlId="content"><Form.Control as="textarea" name="content" rows="3" value={review.content} onChange={handleChange} placeholder="Tell us what you think!"/></Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button type="Submit" variant="primary">Save</Button>
              <ReviewDelete {...props} user={user} msgAlert={msgAlert} review={review}/>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    )
  } else { return '' }
}

export default ReviewPatch
