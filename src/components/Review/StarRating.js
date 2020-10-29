import React, { Fragment, useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = props => {
  const { setReview, review } = props; const [hover, setHover] = useState(''); const handleChange = e => {
    const updatedField = { [e.target.name]: e.target.value }; setReview({ ...review, ...updatedField })
  }; return (
    <Fragment>
      {[...Array(5)].map((star, i) => {
        const value = i + 1; return (
          <label key={value}>
            <input type="radio" name="rating" value={value} onClick={handleChange} />
            <FaStar className="star" size={23} onMouseLeave={() => setHover(review.rating)}
              color={value <= (hover || review.rating) ? '#ffc107' : '#e4e5e9'}
              onMouseEnter={() => setHover(value)}/>
          </label>
        )
      })}
    </Fragment>
  )
}

export default StarRating
