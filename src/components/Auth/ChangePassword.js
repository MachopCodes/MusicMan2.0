import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { changePassword } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

class ChangePassword extends Component {
  constructor () {
    super(); this.state = { oldPassword: '', newPassword: '' }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  onChangePassword = e => {
    e.preventDefault(); const { msgAlert, history, user } = this.props
    changePassword(this.state, user).then(() => msgAlert({
      heading: 'Change Password Success',
      message: messages.changePasswordSuccess,
      variant: 'success'
    })).then(() => history.push('/')).catch(error => {
      this.setState({ oldPassword: '', newPassword: '' })
      msgAlert({
        heading: 'Change Password Failed with error: ' + error.message,
        message: messages.changePasswordFailure,
        variant: 'danger'
      })
    })
  }; render () {
    return (
      <section>
        <Container>
          <Row>
            <Col xl={4} lg={6} md={8} sm={10} xs={12}>
              <Form onSubmit={this.onChangePassword}>
                <Form.Group controlId="oldPassword">
                  <Form.Control
                    required
                    name="oldPassword"
                    value={this.state.oldPassword}
                    type="password"
                    placeholder="Old Password"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="newPassword">
                  <Form.Control
                    required
                    name="newPassword"
                    value={this.state.newPassword}
                    type="password"
                    placeholder="New Password"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Button variant="outline-info btn-block" type="submit">Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default withRouter(ChangePassword)
