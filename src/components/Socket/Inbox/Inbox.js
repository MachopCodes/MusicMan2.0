import React from 'react'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import { FaTrash, FaComments } from 'react-icons/fa'
import { deleteMessage, getUser } from '../../../api/message'
import m from '../../AutoDismissAlert/messages'
import './Inbox.css'

const Inbox = props => {
  const { user, setUser, msgAlert } = props
  const handleClick = e => {
    e.preventDefault(); deleteMessage(e.currentTarget.value, user).then(() => {
      getUser(user._id).then(res => setUser(res.data.user))
    }).catch(event => msgAlert({
      heading: 'Failed to delete: ' + event.message, message: m.msgDelFail, variant: 'danger'
    }))
  }
  return (user.messages.length > 0
    ? (
      <section>
        <Container>
          <Row>
            <Col xl={6} lg={8} md={8} sm={12} xs={12} className="mx-auto">
              <h4 className="text-center">Messages</h4><br/>
              <ListGroup>
                {user.messages.map(m =>
                  <ListGroup.Item key={m._id} className="listgroup">
                    <Container>
                      <Row>
                        <Col><Button href={`#chat?name=${user.name}&room=${m.room}`} variant="outline-success"><FaComments/></Button></Col>
                        <Col className="center"><h6 >{m.recipient}</h6></Col>
                        <Col className="right"><Button variant="outline-danger" onClick={handleClick} value={m._id}><FaTrash/></Button></Col>
                      </Row>
                    </Container>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Col>
          </Row>
        </Container>
        <br/><br/><br/><br/><br/>
      </section>
    )
    : <section><h4 className="text-center">No messages</h4></section>
  )
}

export default Inbox
