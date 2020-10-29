import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { signUp, signIn } from '../../api/auth'
import m from '../AutoDismissAlert/messages'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Email from './Form/Email'
import Password from './Form/Password'
import Name from './Form/Name'
import PassConf from './Form/PassConf'

class SignUp extends Component {
  constructor () {
    super(); this.state = { name: '', email: '', password: '', passConf: '' }
  }; change = e => this.setState({ [e.target.name]: e.target.value }); onSignUp = e => {
    e.preventDefault(); const { msgAlert, history, setUser } = this.props
    signUp(this.state).then(() => signIn(this.state)).then(res => {
      setUser(res.data.user); msgAlert({
        heading: 'Sign Up Success', message: m.signUp, variant: 'success'
      }); history.push('/')
    }).catch(e => {
      this.setState({ name: '', email: '', password: '', passConf: '' }); msgAlert({
        heading: 'Sign Up Failed with error: ' + e.message, message: m.signUpFail, variant: 'danger'
      })
    })
  }; render () {
    const { email, name, password, passConf } = this.state; return (
      <section>
        <Container>
          <Row>
            <Col xl={4} lg={6} md={8} sm={10} xs={12} className="mx-auto">
              <Form onSubmit={this.onSignUp}>
                <Name name={name} change={this.change}/>
                <Email email={email} change={this.change}/>
                <Password password={password} change={this.change}/>
                <PassConf passConf={passConf} change={this.change}/>
                <Button variant="info btn-block" type="submit">Sign Up</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default withRouter(SignUp)
