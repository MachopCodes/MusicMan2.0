import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './AutoDismissAlert/AutoDismissAlert'
import Home from './Layout/Home'
import Header from './Layout/Header'
import SignUp from './Auth/SignUp'
import SignIn from './Auth/SignIn'
import SignOut from './Auth/SignOut'
import ChangePassword from './Auth/ChangePassword'
import CreateProfile from './Profile/CreateProfile'
import IndexProfile from './Profile/IndexProfile'
import ShowProfile from './Profile/ShowProfile'

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: null,
      profile: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })
  clearUser = () => this.setState({ user: null })

  setProfile = profile => this.setState({ profile })
  clearProfile = () => this.setState({ profile: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Route exact path='/' render={(props) => (
            <Home user={user} msgAlert={this.msgAlert}/>)} />
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route user={user} path='/index' render={() => (
            <IndexProfile msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/profiles' render={(props) => (
            <CreateProfile {...props} msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/profiles/:id' render={(props) => (
            <ShowProfile {...props} msgAlert={this.msgAlert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
