import React, { useState } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Button, Form } from 'react-bootstrap'
import ProfileCard from './ProfileCards'
// import messages from '../AutoDismissAlert/messages'

const Search = props => {
  const [data, setData] = useState()
  const [search, setSearch] = useState({
    location: '',
    instrument: '',
    interest: ''
  })

  const handleChange = e => {
    e.preventDefault()
    const updatedField = { [e.target.name]: e.target.value }
    setSearch({ ...search, ...updatedField })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const fetchData = async () => {
      const response = await axios({
        method: 'GET',
        url: apiUrl + '/profiles',
        params: { search }
      })
      setData(await response.data)
    }
    fetchData()
      .catch((err) => console.log(err))
  }
  let jsx
  !data
    ? jsx =
    <section className="container text-light">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="instrument">
          <Form.Label>Instrument</Form.Label>
          <Form.Control as="select" name="instrument" onChange={handleChange}>
            <option>Select Instrument</option>
            <option>Accordion</option>
            <option>Bagpipes</option>
            <option>Banjo</option>
            <option>Bass guitar</option>
            <option>Bassoon</option>
            <option>Bongo</option>
            <option>Cello</option>
            <option>Clarinet</option>
            <option>Didgeridoo</option>
            <option>Drum kit</option>
            <option>Euphonium</option>
            <option>Fiddle</option>
            <option>Flute</option>
            <option>French horn</option>
            <option>Guitar</option>
            <option>Harmonica</option>
            <option>Harp</option>
            <option>Mandolin</option>
            <option>Marimba</option>
            <option>Oboe</option>
            <option>Ocarina</option>
            <option>Organ</option>
            <option>Pan Pipes</option>
            <option>Piano</option>
            <option>Piccolo</option>
            <option>Recorder</option>
            <option>Saxophone</option>
            <option>Sitar</option>
            <option>Singing</option>
            <option>Synthesizer</option>
            <option>Tabla</option>
            <option>Timpani</option>
            <option>Trombone</option>
            <option>Trumpet</option>
            <option>Theremin</option>
            <option>Tuba</option>
            <option>Ukulele</option>
            <option>Viola</option>
            <option>Violin</option>
            <option>Xylophone</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="interest">
          <Form.Label>Interest</Form.Label>
          <Form.Control as="select" name="interest" onChange={handleChange}>
            <option>Select Interest</option>
            <option>Lessons</option>
            <option>Jams</option>
            <option>Gigs</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="location">
          <Form.Label>location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={search.location}
            onChange={handleChange}
            placeholder="Enter location"
          />
        </Form.Group>
        <Button
          type="Submit"
          variant="dark"
          className="mr-auto">
          Submit
        </Button>
      </Form>
    </section>
    : jsx = <ProfileCard {...props} list={data.profiles} />
  return (jsx)
}

export default Search
