import React, { Fragment } from 'react'
import { FaStar } from 'react-icons/fa'

const ReviewScore = props => {
  let jsx
  if (props.reviews) {
    let sum = 0
    const avg = () => {
      for (let i = 0; i < props.reviews.length; i++) {
        sum = sum + props.reviews[i].rating
      }
      return (sum)
    }
    avg()
    jsx = (
      <Fragment>
        {[...Array(5)].map((star, i) => {
          const value = i + 1
          return (
            <label key={value}>
              <input
                type="radio"
                name="rating"
                value={value}
              />
              <FaStar
                className="star"
                color={value <= Math.ceil(sum / props.reviews.length)
                  ? '#ffc107'
                  : '#e4e5e9'}
              />
            </label>
          )
        })}
      </Fragment>
    )
  } else if (props.rating) {
    jsx = (
      <Fragment>
        {[...Array(5)].map((star, i) => {
          const value = i + 1
          return (
            <label key={value}>
              <input
                type="radio"
                name="rating"
                value={value}
              />
              <FaStar
                className="star"
                color={value <= props.rating ? '#ffc107' : '#e4e5e9'}
              />
            </label>
          )
        })}
      </Fragment>
    )
  }
  return jsx
}

export default ReviewScore
