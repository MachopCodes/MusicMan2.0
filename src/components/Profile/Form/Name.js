import React from 'react'
import { Form } from 'react-bootstrap'

const Name = props => {
  return (
    <Form.Group controlId="name">
      <Form.Control
        type="text"
        name="name"
        value={props.name}
        onChange={props.change}
        placeholder="Enter Name"
      />
    </Form.Group>
  )
}

export default Name
