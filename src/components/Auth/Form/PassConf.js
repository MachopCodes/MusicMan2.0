import React from 'react'
import { Form } from 'react-bootstrap'

const PassConf = props => {
  return (
    <Form.Group controlId="passConf">
      <Form.Control
        required
        name="passConf"
        value={props.passConf}
        type="password"
        placeholder="Confirm Password"
        onChange={props.change}
      />
    </Form.Group>
  )
}

export default PassConf
