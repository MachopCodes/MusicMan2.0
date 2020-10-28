import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Email from './Form/Email'
import Password from './Form/Password'

class SignIn extends Component {
  constructor () {
    super(); this.state = { email: '', password: '' }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })
  onSignIn = e => {
    e.preventDefault(); const { msgAlert, history, setUser } = this.props
    signIn(this.state).then(res => setUser(res.data.user)).then(() => {
      msgAlert({
        heading: 'Sign In Success',
        message: messages.signInSuccess,
        variant: 'success'
      }); history.push('/')
    }).catch(error => {
      this.setState({ email: '', password: '' }); msgAlert({
        heading: 'Sign In Failed with error: ' + error.message,
        message: messages.signInFailure,
        variant: 'danger'
      })
    })
  }; render () {
    return (
      <section>
        <Container>
          <Row>
            <Col xl={4} lg={6} md={8} sm={10} xs={12}>
              <Form onSubmit={this.onSignIn}>
                <Email email={this.state.email} change={this.handleChange}/>
                <Password password={this.state.password} change={this.handleChange}/>
                <Button variant="outline-info btn-block" type="submit">Sign In</Button>
              </Form><br/>
              <Link className="align-items-center d-flex justify-content-center small-text" to={'/sign-up'}>
                Don&apos;t have an account? Sign Up
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default withRouter(SignIn)
