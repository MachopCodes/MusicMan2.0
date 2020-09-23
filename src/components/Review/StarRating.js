import React, { Fragment, useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = props => {
  const [hover, setHover] = useState('')

  const handleChange = e => {
    const updatedField = { [e.target.name]: e.target.value }
    props.setReview({ ...props.review, ...updatedField })
  }

  return (
    <Fragment>
      {[...Array(5)].map((star, i) => {
        const value = i + 1
        return (
          <label key={value}>
            <input
              type="radio"
              name="rating"
              value={value}
              onClick={handleChange}
            />
            <FaStar
              className="star"
              size={23}
              onMouseLeave={() => setHover(props.review.rating)}
              onMouseEnter={() => setHover(value)}
              color={value <= (hover || props.review.rating)
                ? '#ffc107'
                : '#e4e5e9'}
            />
          </label>
        )
      })}
    </Fragment>
  )
}

export default StarRating