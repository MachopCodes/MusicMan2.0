import React, { Fragment } from 'react'
import { Accordion, Button } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'

const ReviewScore = props => {
  let sum = 0
  for (let i = 0; i < props.reviews.length; i++) {
    sum = sum + props.reviews[i].rating
  }

  return (
    <Accordion.Toggle
      as={Button}
      variant="link"
      eventKey="0">
      { props.reviews.length === 0
        ? <Fragment>no reviews</Fragment>
        : <Fragment>
          {props.reviews.length} reviews
          <Fragment>
            {[...Array(5)].map((star, i) => {
              const value = i + 1
              return (
                <FaStar
                  size={23}
                  key={value}
                  className="star"
                  color={value <= props.reviews.length
                    ? '#ffc107'
                    : '#e4e5e9'}
                />
              )
            })}
          </Fragment>
        </Fragment>
      }
    </Accordion.Toggle>
  )
}

export default ReviewScore
