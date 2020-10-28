import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { signUp, signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Email from './Form/Email'
import Password from './Form/Password'
import Name from './Form/Name'
import PassConf from './Form/PassConf'

class SignUp extends Component {
  constructor () {
    super(); this.state = {
      name: '',
      email: '',
      password: '',
      passConf: ''
    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  onSignUp = e => {
    e.preventDefault(); const { msgAlert, history, setUser } = this.props
    signUp(this.state).then(() => signIn(this.state)).then(res => {
      setUser(res.data.user); msgAlert({
        heading: 'Sign Up Success',
        message: messages.signUpSuccess,
        variant: 'success'
      }); history.push('/')
    }).catch(e => {
      this.setState({ name: '', email: '', password: '', passConf: '' }); msgAlert({
        heading: 'Sign Up Failed with error: ' + e.message,
        message: messages.signUpFailure,
        variant: 'danger'
      })
    })
  }; render () {
    const { email, name, password, passConf } = this.state
    return (
      <section>
        <Container>
          <Row>
            <Col xl={4} lg={6} md={8} sm={10} xs={12}>
              <Form onSubmit={this.onSignUp}>
                <Name name={name} change={this.handleChange}/>
                <Email email={email} change={this.handleChange}/>
                <Password password={password} change={this.handleChange}/>
                <PassConf passConf={passConf} change={this.handleChange}/>
                <Button variant="outline-info btn-block" type="submit">Sign Up</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default withRouter(SignUp)
