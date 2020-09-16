import React, { useState } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import ProfileCard from './ProfileCards'
import City from './Form/City'
import Instruments from './Form/Instruments'
import Interests from './Form/Interests'
import State from './Form/State'
// import messages from '../AutoDismissAlert/messages'

const Search = props => {
  const [data, setData] = useState()
  const [profile, setProfile] = useState({
    instrument: '',
    interest: '',
    city: '',
    state: ''
  })

  const handleChange = e => {
    e.preventDefault()
    const updatedField = { [e.target.name]: e.target.value }
    setProfile({ ...profile, ...updatedField })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const fetchData = async () => {
      const response = await axios({
        method: 'GET',
        url: apiUrl + '/profiles',
        params: { profile }
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
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Instruments change={handleChange}/>
            </Col>
            <Col>
              <Interests change={handleChange}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <City change={handleChange} city={profile.city}/>
            </Col>
            <Col>
              <State change={handleChange} state={profile.state}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                type="Submit"
                variant="dark"
                className="mr-auto">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
    : jsx = <ProfileCard {...props} list={data.profiles} />
  return (jsx)
}

export default Search
