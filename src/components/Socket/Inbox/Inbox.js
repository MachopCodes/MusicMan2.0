import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, Button } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import { deleteMessage } from '../../../api/message'
import messages from '../../AutoDismissAlert/messages'

const Inbox = props => {
  console.log('props are: ', props)
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
    <section>
      <ListGroup>
        {b.map(p =>
          <ListGroup.Item key={p.name}>
            <div className="row">
              <div className="col-ml-0">
                <Link to={`/chat?name=${user.name}&room=${p.name}&to=${p.id}`}><h4>{p.name}</h4></Link>
              </div>
              <div className="col mr-0">
                <Button className="delete" variant="outline-danger" value={p.id} onClick={handleSubmit}><FaTrash/></Button>
              </div>
            </div>
          </ListGroup.Item>
        )}
      </ListGroup>
    </section>
  )
}

export default Inbox
