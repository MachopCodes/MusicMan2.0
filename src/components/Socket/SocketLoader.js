import React, { Fragment, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Socket from './Socket'

const SocketLoader = () => {
  const [server, setServer] = useState(true)

  return (
    <Fragment>
      <Button onClick={() => setServer(prevState => !prevState)}>
        Toggle client
      </Button>
      {server ? <Socket /> : null}
    </Fragment>
  )
}

export default SocketLoader
