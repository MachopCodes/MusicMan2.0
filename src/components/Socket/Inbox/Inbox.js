import React from 'react'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import { FaTrash, FaReply } from 'react-icons/fa'
import { deleteMessage, getUser } from '../../../api/message'
import m from '../../AutoDismissAlert/messages'
import './Inbox.css'

const Inbox = props => {
  const { user, setUser, msgAlert } = props
  const click = e => {
    e.preventDefault(); deleteMessage(e.currentTarget.value, user).then(() => {
      getUser(user._id).then(res => setUser(res.data.user))
    }).catch(event => msgAlert({
      heading: 'Failed to delete: ' + event.message, message: m.msgDelFail, variant: 'danger'
    }))
  }; const a = []; const b = []; user.messages.map(m => {
    if (m.receiverId !== user._id && !a.includes(m.receiverId)) {
      a.push(m.receiverId); b.push({ id: m.receiverId, name: m.receiverName })
    } if (m.senderId !== user._id && !a.includes(m.senderId)) {
      a.push(m.senderId); b.push({ id: m.senderId, name: m.senderName })
    }
  }); return (user.messages.length > 0
    ? (
      <section>
        <Container>
          <Row>
            <Col xl={4} lg={4} md={6} sm={8} xs={10} className="mx-auto">
              <h4 className="text-center">Messages</h4><br/>
              <ListGroup>
                {b.map(p =>
                  <ListGroup.Item key={p.name} className="listgroup">
                    <Container>
                      <Row>
                        <Col><Button href={`#chat?name=${user.name}&room=${p.name}&to=${p.id}`} variant="outline-success"><FaReply/></Button></Col>
                        <Col className="center"><h6 >{p.name}</h6></Col>
                        <Col className="right"><Button variant="outline-danger" onClick={click} value={p.id}><FaTrash/></Button></Col>
                      </Row>
                    </Container>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>
    )
    : <section><h4 className="text-center">No messages</h4></section>
  )
}

export default Inbox
