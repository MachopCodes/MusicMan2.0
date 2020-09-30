import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Card, Button, Accordion } from 'react-bootstrap'
import ReviewPost from '../Review/ReviewPost'
import ReviewPatch from '../Review/ReviewPatch'
import Star from '../Review/Star'

const ProfileCard = props => {
  const jsx = (
    <div>
      {props.list.map(p => (
        <div key={p._id}>
          <br/>
          <Card>
            <Card.Img variant="top" src="" />
            <Card.Header></Card.Header>
            <Card.Body>
              <Card.Title>{p.instrument} {p.interest}</Card.Title>
              <Card.Subtitle>{p.owner.userName}, {p.city}, {p.state}</Card.Subtitle>
              <Card.Text>{p.blurb}</Card.Text>
            </Card.Body>
            <Card.Body>
              <Accordion>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="0">
                      { p.reviews.length === 0
                        ? <div>no reviews</div>
                        : <div>
                          {p.reviews.length} reviews
                          <Star reviews={p.reviews}/>
                        </div>
                      }
                    </Accordion.Toggle>
                  </Card.Header>
                  {p.reviews.map(review => (
                    <Accordion.Collapse key={review._id} eventKey="0">
                      <Card>
                        <Card.Body><Star rating={review.rating}/>
                          <Card.Text>
                            {review.content} {review.reviewer}
                          </Card.Text>
                          <ReviewPatch
                            {...props}
                            review={review}
                            profileId={p._id}
                            user={props.user}
                            msgAlert={props.msgAlert}
                          />
                        </Card.Body>
                      </Card>
                    </Accordion.Collapse>
                  ))}
                  <Card.Footer>{props.user && props.user._id === p.owner._id
                    ? <Link to={`/profiles/${p._id}`}>
                      <Button variant="success">Edit Profile</Button></Link>
                    : <ReviewPost
                      profile={p}
                      owner={p.owner}
                      reviews={p.reviews}
                      profileId={p._id}
                      user={props.user}
                      msgAlert={props.msgAlert}/>}</Card.Footer>
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
