import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Card, Button, Accordion } from 'react-bootstrap'
import ReviewPost from '../../Review/ReviewPost'
import ReviewPatch from '../../Review/ReviewPatch'
import Star from '../../Review/Star'
import { FaUserEdit } from 'react-icons/fa'

const ProfileCard = props => {
  const { list, msgAlert, user } = props
  const jsx = (
    <Fragment>{list.map(p => (
      <div key={p._id}>
        <br/>
        <Card className={`d-flex border-${p.interest === 'Lessons'
          ? 'primary' : p.interest === 'Jams' ? 'success' : p.interest === 'Gigs' ? 'danger' : 'white'}`}>
          <Card.Body>
            <Card.Title className={`align-items-center d-flex justify-content-center text-${p.interest === 'Lessons'
              ? 'primary' : p.interest === 'Jams' ? 'success' : p.interest === 'Gigs' ? 'danger' : 'white'}`}>
              {p.instrument} {p.interest}
            </Card.Title>
            <Card.Subtitle className="align-items-center d-flex justify-content-center mb-2 text-muted">{p.city}, {p.state}</Card.Subtitle>
            <Card.Subtitle className="align-items-center d-flex justify-content-center mb-2 text-info">{p.owner.name}</Card.Subtitle>
            <Card.Text className="align-items-center d-flex justify-content-center mb-2 text-secondary">{p.blurb}</Card.Text>
          </Card.Body>
          <Accordion>
            <Card className="d-flex border-0">
              <Card.Header className="myaccordion align-items-center d-flex justify-content-center border-0">
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  { p.reviews.length > 1
                    ? <div><Star reviews={p.reviews}/><span className="small-text"> {p.reviews.length} reviews</span></div>
                    : p.reviews.length === 1
                      ? <div><Star reviews={p.reviews}/><span className="small-text"> {p.reviews.length} review</span></div>
                      : <span className="small-text">No reviews</span>}
                </Accordion.Toggle>
              </Card.Header>
              {p.reviews.map(review => (
                <Accordion.Collapse key={review._id} eventKey="0">
                  <Card className="d-flex">
                    <Card.Body>
                      <span className="align-items-center d-flex justify-content-center"><Star rating={review.rating}/></span>
                      <Card.Text className="align-items-center d-flex justify-content-center small-text">{review.content}</Card.Text>
                      <Card.Text className="align-items-center d-flex justify-content-center italic text-muted small-text">{review.reviewerName}</Card.Text>
                      <ReviewPatch {...props} review={review} profileId={p._id} user={user} msgAlert={msgAlert}/>
                    </Card.Body>
                  </Card>
                </Accordion.Collapse>
              ))}
              <Card.Footer className="myaccordion align-items-center d-flex justify-content-center border-0">
                {user && user._id === p.owner._id
                  ? <Link to={`/profiles/${p._id}`}><Button variant="outline-success" className="mr-auto"><FaUserEdit/> Edit Profile</Button></Link>
                  : <ReviewPost {...props} profile={p} user={user} msgAlert={msgAlert}/>}
              </Card.Footer>
            </Card>
          </Accordion>
        </Card>
        <br/>
      </div>
    ))}
    </Fragment>
  )
  return jsx
}

export default withRouter(ProfileCard)
