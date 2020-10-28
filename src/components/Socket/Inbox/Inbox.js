import React from 'react'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import { FaTrash, FaReply } from 'react-icons/fa'
import { deleteMessage } from '../../../api/message'
import messages from '../../AutoDismissAlert/messages'

const Inbox = props => {
  const { user, msgAlert, history } = props; const click = e => {
    e.preventDefault(); deleteMessage(user, e).then(() => msgAlert({
      heading: 'Conversation Deleted',
      message: messages.messageDeleteSuccess,
      variant: 'success'
    })).then(() => history.push('/')).catch(err => msgAlert({
      heading: 'Failed to delete: ' + err.message,
      message: messages.messageDeleteFailure,
      variant: 'danger'
    }))
  }
  const a = []; const b = []; user.messages.map(m => {
    if (m.receiverId !== user._id && !a.includes(m.receiverId)) {
      a.push(m.receiverId); b.push({ id: m.receiverId, name: m.receiverName })
    } if (m.senderId !== user._id && !a.includes(m.senderId)) {
      a.push(m.senderId); b.push({ id: m.senderId, name: m.senderName })
    }
  }); return (
    <section>
      <Container>
        <Row>
          <Col xl={4} lg={6} md={8} sm={10} xs={12}>
            <ListGroup>
              {b.map(p =>
                <ListGroup.Item key={p.name}>
                  <Row>
                    <Col ml={0}><h6>{p.name}</h6></Col>
                    <Col><Button href={`#chat?name=${user.name}&room=${p.name}&to=${p.id}`} className="success" variant="outline-success" value={p.id}><FaReply/></Button></Col>
                    <Col mr={0}><Button className="delete mr-0" variant="outline-danger" value={p.id} onClick={click}><FaTrash/></Button></Col>
                  </Row>
                </ListGroup.Item>
              )}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Inbox
