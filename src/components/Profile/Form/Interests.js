import React from 'react'
import { ButtonGroup, ToggleButton } from 'react-bootstrap'

const Interests = ({ interest, change }) => {
  const radios = [
    { name: 'Lessons', value: 'Lessons' },
    { name: 'Gigs', value: 'Gigs' },
    { name: 'Jams', value: 'Jams' }
  ]

  return (
    <ButtonGroup toggle className="button-group d-flex">
      {radios.map((radio, i) => (
        <ToggleButton
          key={i}
          type="radio"
          variant={`outline-${i === 0 ? 'primary' : i === 1 ? 'danger' : i === 2 ? 'success' : null}`}
          name="interest"
          value={radio.value}
          onChange={change}
          checked={interest === radio.value}
        >
          {radio.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  )
}

export default Interests
