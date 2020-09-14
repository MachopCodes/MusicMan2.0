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
          <Card.Body>
            <Card.Title>{p.instruments} {p.interests}</Card.Title>
            <Card.Text>{p.name} {p.location} {p.contact}</Card.Text>
          </Card.Body>
          <Card.Footer>
            {props.user && props.user._id === p.owner._id
              ? <Link to={`/profiles/${p._id}`}>
                <Button variant="success">Edit Profile</Button>
              </Link>
              : <br/>}
          </Card.Footer>
        </Card>
      ))}
    </CardColumns>
  )
}

export default withRouter(ProfileCard)
