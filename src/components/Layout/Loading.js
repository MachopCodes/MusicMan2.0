import React, { Fragment } from 'react'
import { Spinner, Container, Row, Col } from 'react-bootstrap'

const Loading = () => (
  <Fragment className="mx-auto">
    <Container>
      <Row>
        <Col className="d-flex justify-content-center mx-auto">
          <Spinner animation="grow" variant="light"/>
        </Col>
      </Row>
    </Container>
  </Fragment>
)

export default Loading
