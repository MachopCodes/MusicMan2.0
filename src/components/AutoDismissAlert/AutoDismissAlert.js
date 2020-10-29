import React from 'react'
import { Alert, Container } from 'react-bootstrap'

import './AutoDismissAlert.scss'

class AutoDismissAlert extends React.Component {
  constructor (props) {
    super(props); this.state = { show: true }
  }; componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({ show: false })
    }, 2000)
  }; componentWillUnmount () {
    clearInterval(this.timer)
  }; handleClose = () => this.setState({ show: false })
  render () {
    const { variant, heading, message } = this.props; return (
      <Alert
        dismissible show={this.state.show}
        variant={variant} onClose={this.handleClose}
      >
        <Container>
          <Alert.Heading>{heading}</Alert.Heading>
          <p className="alert-body">{message}</p>
        </Container>
      </Alert>
    )
  }
}

export default AutoDismissAlert
