import React from 'react'
import { Form } from 'react-bootstrap'

const Blurb = props => {
  return (
    <Form.Group controlId="blurb">
      <Form.Label>Blurb</Form.Label>
      <Form.Control
        as="textarea"
        name="blurb"
        rows="3"
        value={props.blurb}
        onChange={props.change}
        placeholder="Tell us about yourself!"
      />
    </Form.Group>
  )
}

export default Blurb
