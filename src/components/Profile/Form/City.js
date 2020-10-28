import React from 'react'
import { Form } from 'react-bootstrap'

const City = props => {
  return (
    <Form.Group controlId="city">
      <Form.Control
        type="text"
        name="city"
        value={props.city}
        onChange={props.change}
        placeholder="Town / City"
      />
    </Form.Group>
  )
}

export default City
