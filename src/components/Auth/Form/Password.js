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
        placeholder="Password"
        onChange={props.change}
      />
    </Form.Group>
  )
}

export default Password
