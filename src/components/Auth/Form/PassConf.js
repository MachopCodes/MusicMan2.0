import React from 'react'
import { Form } from 'react-bootstrap'

const PassConf = props => {
  return (
    <Form.Group controlId="passwordConfirmation">
      <Form.Control
        required
        name="passwordConfirmation"
        value={props.passConf}
        type="password"
        placeholder="Confirm Password"
        onChange={props.change}
      />
    </Form.Group>
  )
}

export default PassConf
