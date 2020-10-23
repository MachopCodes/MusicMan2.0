import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, Button } from 'react-bootstrap'
import { deleteMessage } from '../../../api/message'
import messages from '../../AutoDismissAlert/messages'

const Inbox = props => {
  const { user, msgAlert, history } = props
  const handleSubmit = e => {
    e.preventDefault()
    deleteMessage(user, e)
      .then(() => msgAlert({
        heading: 'Conversation Deleted',
        message: messages.messageDeleteSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(err => msgAlert({
        heading: 'Failed to delete: ' + err.message,
        message: messages.messageDeleteFailure,
        variant: 'danger'
      }))
  }

  const a = []; const b = []
  user.messages.map(m => {
    if (m.receiverId !== user._id && !a.includes(m.receiverId)) {
      a.push(m.receiverId)
      b.push({ id: m.receiverId, name: m.receiverName })
    } if (m.senderId !== user._id && !a.includes(m.senderId)) {
      a.push(m.senderId)
      b.push({ id: m.senderId, name: m.senderName })
    }
  })

  return (
    <Fragment>
      <ListGroup>
        {b.map(p =>
          <ListGroup.Item key={p.name}>
            <h2>{p.name}</h2>
            <Link to={`/chat?name=${user.name}&room=${p.name}&to=${p.id}`}>
              <Button variant="success">Reply</Button>
            </Link>
            <Button variant="danger" value={p.id} onClick={handleSubmit}>Delete</Button>
          </ListGroup.Item>
        )}
      </ListGroup>
    </Fragment>
  )
}

export default Inbox
