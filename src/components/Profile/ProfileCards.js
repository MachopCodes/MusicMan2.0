import React from 'react'
import { CardColumns, Card } from 'react-bootstrap'
import EditProfile from './EditProfile'

const ProfileCard = props => {
  return (
    <CardColumns>
      {props.list.map(profile => (
        <Card key={profile._id}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{profile.instruments} {profile.interests}</Card.Title>
            <Card.Text>{profile.name} {profile.location} {profile.contact}</Card.Text>
          </Card.Body>
          <Card.Footer>
            {props.user && props.user._id === profile.owner
              ? <EditProfile
                {...profile}
                user={props.user}
                setData={props.setData}
                msgAlert={props.msgAlert} />
              : <br/>}
          </Card.Footer>
        </Card>
      ))}
    </CardColumns>
  )
}

export default ProfileCard
