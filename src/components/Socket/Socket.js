import React, { Fragment, useState } from 'react'
import socketIOClient from 'socket.io-client'
import { Form, Button } from 'react-bootstrap'

const ENDPOINT = 'http://127.0.0.1:4741'

const Socket = props => {
  const [data, setData] = useState('')
  const messages = []
  const socket = socketIOClient(ENDPOINT)

  const handleChange = e => {
    e.preventDefault()
    const updatedField = { [e.target.name]: e.target.value }
    setData(updatedField)
  }

  const socketSend = (msg) => {
    socket.emit('chat message', msg)
  }

  const socketRecieve = () => {
    socket.on('chat message', (msg) => {
      console.log('message is: ', msg)
      messages.push(msg)
      return msg
    })
  }
  console.log('messages are: ', messages)

  const handleSubmit = e => {
    e.preventDefault()
    socketSend(data.data)
    socketRecieve()
    setData('')
  }

  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="data">
          <Form.Control
            required
            type="text"
            name="data"
            value={data.message}
            onChange={handleChange}
            placeholder="enter message"
          />
        </Form.Group>
        <Button
          type="Submit"
          variant="dark"
          className="mr-auto">
          Submit
        </Button>
      </Form>
    </Fragment>
  )
}

export default Socket
