import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { changePassword } from '../../api/auth'
import m from '../AutoDismissAlert/messages'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

class ChangePassword extends Component {
  constructor () {
    super(); this.state = { oldPassword: '', newPassword: '' }
  }; handleChange = e => this.setState({ [e.target.name]: e.target.value }); onChangePassword = e => {
    e.preventDefault(); const { msgAlert, history, user } = this.props
    changePassword(this.state, user).then(() => msgAlert({
      heading: 'Change Password Success', message: m.changePass, variant: 'success'
    })).then(() => history.push('/')).catch(e => {
      this.setState({ oldPassword: '', newPassword: '' })
      msgAlert({
        heading: 'Change Password Failed with error: ' + e.message, message: m.changePassFail, variant: 'danger'
      })
    })
  }; render () {
    return (
      <section>
        <Container>
          <Row>
            <Col xl={4} lg={6} md={8} sm={10} xs={12} className="mx-auto">
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
                <Button variant="info btn-block" type="submit">Change Password</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default withRouter(ChangePassword)
