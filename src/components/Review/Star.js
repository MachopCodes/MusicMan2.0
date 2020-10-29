import React, { Fragment } from 'react'
import { FaStar } from 'react-icons/fa'

const ReviewScore = props => {
  const { reviews, rating } = props; let jsx; if (reviews) {
    let sum = 0; const avg = () => {
      for (let i = 0; i < reviews.length; i++) {
        sum = sum + reviews[i].rating
      }; return sum
    }; avg(); jsx = (
      <Fragment>
        {[...Array(5)].map((star, i) => {
          const value = i + 1; return (
            <label key={value}>
              <input type="radio" name="rating" value={value} />
              <FaStar className="star" size="15px" color={value <= Math.ceil(sum / reviews.length) ? '#ffc107' : '#e4e5e9'}/>
            </label>
          )
        })}
      </Fragment>
    )
  } else if (rating) {
    jsx = (
      <Fragment>
        {[...Array(5)].map((star, i) => {
          const value = i + 1; return (
            <label key={value}>
              <input type="radio" name="rating" value={value} />
              <FaStar className="star" color={value <= rating ? '#ffc107' : '#e4e5e9'}/>
            </label>
          )
        })}
      </Fragment>
    )
  }; return jsx
}

export default ReviewScore
