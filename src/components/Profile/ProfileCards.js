import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { CardColumns, Card, Button } from 'react-bootstrap'

const ProfileCard = props => {
  return (
    <section>
      <CardColumns>
        {props.list.map(p => (
          <Card key={p._id}>
            <Card.Img variant="top" src="" />
            <Card.Header>{p.city}, {p.state}</Card.Header>
            <Card.Body>
              <Card.Title>{p.instrument} {p.interest}</Card.Title>
              <Card.Text>{p.blurb}</Card.Text>
            </Card.Body>
            <Card.Footer>
              {props.user && props.user._id === p.owner._id
                ? <Link to={`/profiles/${p._id}`}>
                  <Button variant="success">Edit Profile</Button></Link>
                : p.name }
            </Card.Footer>
          </Card>
        ))}
      </CardColumns>
    </section>
  )
}

export default withRouter(ProfileCard)
