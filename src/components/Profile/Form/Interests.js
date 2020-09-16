import React from 'react'
import { Form } from 'react-bootstrap'

const Interests = props => {
  return (
    <Form.Group controlId="interest">
      <Form.Control as="select" name="interest" onChange={props.change}>
        <option>Interest</option>
        <option>Lessons</option>
        <option>Jams</option>
        <option>Gigs</option>
      </Form.Control>
    </Form.Group>
  )
}

export default Interests
