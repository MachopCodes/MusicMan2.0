import React, { Fragment, useState } from 'react'
import { Modal, Form, Container, Button } from 'react-bootstrap'
import messages from '../AutoDismissAlert/messages'
import { postMessage } from '../../api/message'

const SendMessage = props => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [message, setMessage] = useState({
    title: '',
    body: '',
    to: props.owner._id,
    from: props.user._id
  })

  const handleChange = e => {
    e.preventDefault()
    const updatedField = { [e.target.name]: e.target.value }
    setMessage({ ...message, ...updatedField })
  }

  const handleSubmit = e => {
    e.preventDefault()
    postMessage(message, props.user)
      .then(() => {
        props.msgAlert({
          heading: 'Message Sent!',
          message: messages.createProfileSuccuess,
          variant: 'success'
        })
        handleClose()
      })
      .catch(error => console.log(error))
  }
  return (
    <Fragment>
      <Button variant="success" onClick={handleShow}>Send Message</Button>
      <Container>
        <Modal centered show={show} onHide={handleClose}>
          <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Send Message to {props.owner.userName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="title">
                <Form.Control
                  type="text"
                  name="title"
                  value={message.title}
                  onChange={handleChange}
                  placeholder="title:"
                />
              </Form.Group>
              <Form.Group controlId="body">
                <Form.Control
                  type="text"
                  name="body"
                  value={message.body}
                  onChange={handleChange}
                  placeholder="body:"
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button type="Submit" variant="dark" className="mr-auto">
                Send
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Container>
    </Fragment>
  )
}

export default SendMessage
