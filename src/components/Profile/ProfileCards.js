import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Card, Button, Accordion } from 'react-bootstrap'
import ReviewPost from '../Review/ReviewPost'
import ReviewPatch from '../Review/ReviewPatch'
import Star from '../Review/Star'

const ProfileCard = props => {
  const { list, msgAlert, user } = props
  const jsx = (
    <div>{list.map(p => (
      <div key={p._id}>
        <br/>
        <Card>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{p.instrument} {p.interest}</Card.Title>
            <Card.Subtitle>{p.owner.name}, {p.city}, {p.state}</Card.Subtitle>
            <Card.Text>{p.blurb}</Card.Text>
          </Card.Body>
          <Card.Body>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    { p.reviews.length === 0
                      ? <span>No Reviews</span>
                      : <span>{p.reviews.length} Reviews<Star reviews={p.reviews}/></span>}
                  </Accordion.Toggle>
                </Card.Header>
                {p.reviews.map(review => (
                  <Accordion.Collapse key={review._id} eventKey="0">
                    <Card>
                      <Card.Body><Star rating={review.rating}/>
                        <Card.Text>{review.content} {review.reviewerName}</Card.Text>
                        <ReviewPatch {...props} review={review} profileId={p._id} user={user} msgAlert={msgAlert}/>
                      </Card.Body>
                    </Card>
                  </Accordion.Collapse>
                ))}
                <Card.Footer>{user && user._id === p.owner._id
                  ? <Link to={`/profiles/${p._id}`}>Edit Profile</Link>
                  : <ReviewPost {...props} profile={p} user={user} msgAlert={msgAlert}/>}
                </Card.Footer>
              </Card>
            </Accordion>
          </Card.Body>
        </Card>
        <br/>
      </div>
    ))}
    </div>
  )
  return jsx
}

export default withRouter(ProfileCard)
