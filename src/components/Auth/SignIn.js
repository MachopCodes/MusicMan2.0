import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'
import { Form, Button } from 'react-bootstrap'
import Email from './Form/Email'
import Password from './Form/Password'

class SignIn extends Component {
  constructor () {
    super()
    this.state = { email: '', password: '' }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  onSignIn = e => {
    e.preventDefault()
    const { msgAlert, history, setUser } = this.props
    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Sign In Success',
        message: messages.signInSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ email: '', password: '' })
        msgAlert({
          heading: 'Sign In Failed with error: ' + error.message,
          message: messages.signInFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { email, password } = this.state
    return (
      <section>
        <div className="Container text-dark">
          <div className="row">
            <div className="col-sm-10 col-md-8 mx-auto mt-5">
              <Form onSubmit={this.onSignIn}>
                <Email email={email} change={this.handleChange}/>
                <Password password={password} change={this.handleChange}/>
                <Button variant="outline-info" type="submit">Sign In</Button>
              </Form>
              <span>Don&apos;t have one?</span>
              <br/>
              <Link to={'/sign-up'}>Sign Up</Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default withRouter(SignIn)
