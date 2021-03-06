import React, { Fragment } from 'react'
import { Spinner, Container, Row, Col } from 'react-bootstrap'

const Loading = () => (
  <Fragment>
    <Container>
      <Row>
        <Col className="d-flex justify-content-center mx-auto">
          <Spinner animation="border" variant="white" />
        </Col>
      </Row>
    </Container>
  </Fragment>
)

export default Loading
