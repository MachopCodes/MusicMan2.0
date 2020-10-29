import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './AutoDismissAlert/AutoDismissAlert'
import Search from './Layout/Search'
import Header from './Layout/Header'
import Settings from './Layout/Settings'
import SignUp from './Auth/SignUp'
import SignIn from './Auth/SignIn'
import SignOut from './Auth/SignOut'
import ChangePassword from './Auth/ChangePassword'
import CreateProfile from './Profile/CreateProfile'
import ShowProfile from './Profile/ShowProfile'
import Inbox from './Socket/Inbox/Inbox'
import Chat from './Socket/Chat/Chat'

class App extends Component {
  constructor () { super(); this.state = { user: null, opers: [], profile: null, msgAlerts: [] } }
  setUser = user => this.setState({ user }); clearUser = () => this.setState({ user: null })
  setOpers = oper => this.setState([{ oper }]); clearOper = () => this.setState({ oper: [] })
  setProfile = profile => this.setState({ profile }); clearProfile = () => this.setState({ profile: null })
  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }; render () {
    const { msgAlerts, user, opers } = this.state; return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((alert, i) => (
          <AutoDismissAlert key={i} heading={alert.heading} variant={alert.variant} message={alert.message}/>
        ))}
        <main>
          <Route path='/chat' render={(props) => (
            <Chat {...props} user={user} setUser={this.setUser} opers={opers} setOpers={this.setOpers}/>
          )} />
          <Route exact path='/' render={(props) => (
            <Search user={user} msgAlert={this.msgAlert}/>
          )} />
          <Route exact path='/settings' render={(props) => (
            <Settings user={user} msgAlert={this.msgAlert}/>
          )} />
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
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
          <AuthenticatedRoute user={user} path='/messages' render={(props) => (
            <Inbox {...props} msgAlert={this.msgAlert} user={user} setUser={this.setUser} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
