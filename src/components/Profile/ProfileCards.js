import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Card, Button, Accordion } from 'react-bootstrap'
import ReviewPost from '../Review/ReviewPost'
import ReviewScore from '../Review/ReviewScore'

const ProfileCard = props => {
  const jsx = (
    <section>
      {props.list.map(p => (
        <Card key={p._id}>
          <Card.Img variant="top" src="" />
          <Card.Header></Card.Header>
          <Card.Body>
            <Card.Title>{p.instrument} {p.interest}</Card.Title>
            <Card.Subtitle>{p.name}, {p.city}, {p.state}</Card.Subtitle>
            <Card.Text>{p.blurb}</Card.Text>
          </Card.Body>
          <Card.Body>
            <Accordion>
              <Card>
                <Card.Header>
                  <ReviewScore reviews={p.reviews}/>
                </Card.Header>
                {p.reviews.map(review => (
                  <Accordion.Collapse key={review._id} eventKey="0">
                    <Card><Card.Body><Card.Text>
                      {review.content} {review.rating}
                    </Card.Text></Card.Body></Card>
                  </Accordion.Collapse>
                ))}
                <Card.Footer>{props.user && props.user._id === p.owner._id
                  ? <Link to={`/profiles/${p._id}`}>
                    <Button variant="success">Edit Profile</Button></Link>
                  : <ReviewPost
                    reviews={p.reviews}
                    profileId={p._id}
                    user={props.user}
                    msgAlert={props.msgAlert}/>}</Card.Footer>
              </Card>
            </Accordion>
          </Card.Body>
        </Card>
      ))}
    </section>
  )
  return jsx
}

export default withRouter(ProfileCard)
