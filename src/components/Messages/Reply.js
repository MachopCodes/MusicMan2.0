import React, { Fragment, useState } from 'react'
import { Form, Modal, Button, Container } from 'react-bootstrap'
import { reply } from '../../api/message'
import messages from '../AutoDismissAlert/messages'

const Reply = props => {
  console.log('reply props are: ', props)
  const len = props.message.body.length
  const lastMsg = props.message.body[len - 1]

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [message, setMessage] = useState({
    body: '',
    profileId: ''
  })

  const handleChange = e => {
    e.preventDefault()
    const updatedField = { [e.target.name]: e.target.value }
    setBody({ body, updatedField })
  }

  const handleSubmit = e => {
    e.preventDefault()
    reply(body, props.messsage, props.user)
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
      <Button variant="success" onClick={handleShow}>Reply</Button>
      <Container>
        <Modal centered show={show} onHide={handleClose}>
          <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Reply to {props.message.from}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{lastMsg}</p>
              <Form.Group controlId="body">
                <Form.Control
                  type="text"
                  name="body"
                  value={body}
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

export default Reply
