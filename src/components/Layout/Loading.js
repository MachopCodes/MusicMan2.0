import React, { Fragment } from 'react'
import { Spinner, Container, Row, Col } from 'react-bootstrap'

const Loading = () => (
  <Fragment className="mx-auto">
    <Container>
      <Row>
        <Col className="d-flex justify-content-center mx-auto">
          <Spinner size="sm" animation="grow" variant="primary" />
        </Col>
      </Row>
    </Container>
  </Fragment>
)

export default Loading
