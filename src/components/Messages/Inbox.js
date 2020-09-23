import React, { Fragment } from 'react'
import { Card, Accordion, Badge, Button } from 'react-bootstrap'
import Reply from './Reply'

const Inbox = props => {
  return (
    <Fragment>
      {props.user.messages.map(message =>
        <Accordion key={message._id}>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <p>Message from {message.from} {message.title}</p>
                <Badge pill variant="success">
                  {message.createdAt.substring(5, 10)}@{message.createdAt.substring(11, 16)}
                </Badge>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div>{message.body}</div>
                <Reply message={message} msgAlert={props.msgAlert}/>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      )}
    </Fragment>
  )
}

export default Inbox
