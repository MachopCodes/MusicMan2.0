import { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signOut } from '../../api/auth'
import m from '../AutoDismissAlert/messages'

class SignOut extends Component {
  componentDidMount () {
    const { msgAlert, history, clearUser, user } = this.props
    signOut(user).finally(() => msgAlert({
      heading: 'Bye!!', message: m.signOut, variant: 'success'
    })).finally(() => history.push('/')).finally(() => clearUser())
  }; render () { return '' }
}

export default withRouter(SignOut)
