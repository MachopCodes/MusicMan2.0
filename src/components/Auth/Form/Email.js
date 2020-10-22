import React from 'react'
import { Form } from 'react-bootstrap'

const Email = props => {
  return (
    <Form.Group controlId="email">
      <Form.Control
        type="text"
        name="email"
        value={props.email}
        onChange={props.change}
        placeholder="Enter Name"
      />
    </Form.Group>
  )
}

export default Email
