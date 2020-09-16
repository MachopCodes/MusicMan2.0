import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { CardColumns, Card, Button } from 'react-bootstrap'

const ProfileCard = props => {
  console.log('profile card props are: ', props)
  return (
    <CardColumns>
      {props.list.map(p => (
        <Card key={p._id}>
          <Card.Img variant="top" src="" />
          <Card.Header>{p.name}, {p.location} </Card.Header>
          <Card.Body>
            <Card.Title>{p.instruments} {p.interests}</Card.Title>
            <Card.Text>{p.blurb}</Card.Text>
          </Card.Body>
          <Card.Footer>
            {props.user && props.user._id === p.owner._id
              ? <Link to={`/profiles/${p._id}`}>
                <Button variant="success">Edit Profile</Button></Link>
              : p.contact}
          </Card.Footer>
        </Card>
      ))}
    </CardColumns>
  )
}

export default withRouter(ProfileCard)
