import React from 'react'
import { Form } from 'react-bootstrap'

const Password = props => {
  return (
    <Form.Group controlId="password">
      <Form.Control
        required
        name="password"
        value={props.password}
        type="password"
        placeholder="Enter Password"
        onChange={props.change}
      />
    </Form.Group>
  )
}

export default Password
