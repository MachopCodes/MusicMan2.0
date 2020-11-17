import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { signUp, signIn } from '../../api/auth'
import m from '../AutoDismissAlert/messages'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Email from './Form/Email'
import Password from './Form/Password'
import Name from './Form/Name'
import PassConf from './Form/PassConf'
import Loading from '../Layout/Loading'

class SignUp extends Component {
  constructor () {
    super(); this.state = { name: '', email: '', password: '', passConf: '', clicked: false }
  }
  change = e => this.setState({ [e.target.name]: e.target.value })
  onSignUp = e => {
    e.preventDefault(); this.setState({ clicked: true })
    const { msgAlert, history, setUser } = this.props
    signUp(this.state).then(() => signIn(this.state)).then(res => {
      setUser(res.data.user)
      msgAlert({ heading: 'Sign Up Success', message: m.signUp, variant: 'success' })
      history.push('/')
    }).catch(e => {
      this.setState({ name: '', email: '', password: '', passConf: '', clicked: false })
      msgAlert({
        heading: 'Sign Up Failed with error: ' + e.message,
        message: m.signUpFail,
        variant: 'danger'
      })
    })
  }
  render () {
    const { clicked, email, name, password, passConf } = this.state
    return (
      <section>
        <Container>
          <Row>
            <Col xl={4} lg={6} md={8} sm={10} xs={12} className="mx-auto">
              <h2 className="brand-sub">Sign Up</h2>
              <Form onSubmit={this.onSignUp}>
                <Email email={email} change={this.change}/>
                <Name name={name} change={this.change}/>
                <Password password={password} change={this.change}/>
                <PassConf passConf={passConf} change={this.change}/>
                <Button className="button-group" variant="outline-info btn-block" type="submit">
                  {clicked ? <Loading/> : <span>sign up</span>}
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default withRouter(SignUp)
