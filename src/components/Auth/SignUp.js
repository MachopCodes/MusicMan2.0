import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { signUp, signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'
import { Form, Button } from 'react-bootstrap'
import Email from './Form/Email'
import Password from './Form/Password'
import Name from './Form/Name'
import PassConf from './Form/PassConf'

class SignUp extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      passConf: ''
    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  onSignUp = e => {
    e.preventDefault()
    const { msgAlert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Sign Up Success',
        message: messages.signUpSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ name: '', email: '', password: '', passConf: '' })
        msgAlert({
          heading: 'Sign Up Failed with error: ' + error.message,
          message: messages.signUpFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { email, name, password, passConf } = this.state
    return (
      <div className="container text-light">
        <div className="row">
          <div className="col-sm-10 col-md-8 mx-auto mt-5">
            <Form onSubmit={this.onSignUp}>
              <Name name={name} change={this.handleChange}/>
              <Email email={email} change={this.handleChange}/>
              <Password password={password} change={this.handleChange}/>
              <PassConf passConf={passConf} change={this.handleChange}/>
              <Button variant="outline-info" type="submit">Sign Up</Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(SignUp)
