import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { signIn } from '../../api/auth'
import m from '../AutoDismissAlert/messages'
import Loading from '../Layout/Loading'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Email from './Form/Email'
import Password from './Form/Password'

class SignIn extends Component {
  constructor () {
    super(); this.state = {
      email: '', password: '', clicked: false }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })
  onSignIn = e => {
    e.preventDefault()
    this.setState({ clicked: true })
    const { msgAlert, history, setUser } = this.props
    signIn(this.state).then(res => {
      setUser(res.data.user)
      const firstName = res.data.user.name.substr(0, res.data.user.name.indexOf(' '))
      msgAlert({ heading: `Hi ${firstName}!`, message: m.signIn, variant: 'success' })
      history.push('/')
    }).catch(e => {
      this.setState({ email: '', password: '', clicked: false })
      msgAlert({
        heading: 'Sign In Failed with error: ' + e.message,
        message: m.signInFail,
        variant: 'danger'
      })
    })
  }

  render () {
    const { clicked, email, password } = this.state
    return (
      <section>
        <Container>
          <Row>
            <Col xl={4} lg={6} md={8} sm={10} xs={12} className="mx-auto">
              <h2 className="text-center">Sign In</h2>
              <Form onSubmit={this.onSignIn}>
                <Email email={email} change={this.handleChange}/>
                <Password password={password} change={this.handleChange}/>
                <Button variant="info btn-block" type="submit">
                  {clicked ? <Loading/> : <span>sign in</span>}
                </Button>
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
