import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, Button } from 'react-bootstrap'

const Inbox = ({ user }) => {
  const a = []
  const b = []
  user.messages.map(m => {
    if (m.receiverId !== user._id && !a.includes(m.receiverId)) {
      a.push(m.receiverId)
      console.log('receive pushing ', m.receiverName)
      b.push({ id: m.receiverId, name: m.receiverName })
    } if (m.senderId !== user._id && !a.includes(m.senderId)) {
      a.push(m.senderId)
      console.log('send pushing ', m.senderName)
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
            <Button variant="danger">Delete</Button>
          </ListGroup.Item>
        )}
      </ListGroup>
    </Fragment>
  )
}

export default Inbox
