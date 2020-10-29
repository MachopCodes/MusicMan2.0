import React, { useState, Fragment } from 'react'
import axios from 'axios'
import apiUrl from '../../api/config'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import ProfileCard from '../Profile/Cards/ProfileCards'
import City from '../Profile/Form/City'
import Instruments from '../Profile/Form/Instruments'
import Interests from '../Profile/Form/Interests'
import State from '../Profile/Form/State'

const Search = props => {
  const [data, setData] = useState()
  const [profile, setProfile] = useState({
    instrument: '',
    interest: '',
    city: '',
    state: ''
  })

  const handleChange = e => {
    const updatedField = { [e.target.name]: e.target.value }
    setProfile({ ...profile, ...updatedField })
  }

  const handleSubmit = e => {
    e.preventDefault(); const fetchData = async () => {
      const res = await axios({
        method: 'GET', url: apiUrl + '/profiles', params: { profile }
      }); setData(await res.data)
    }; fetchData().catch((err) => console.log(err))
  }

  const search = (
    <Fragment>
      <Container>
        <Row>
          <Col xl={4} lg={6} md={8} sm={10} xs={12} className="mx-auto">
            <Form onSubmit={handleSubmit}><Instruments change={handleChange}/>
              <Interests change={handleChange}/>
              <State change={handleChange} state={profile.state}/>
              <City change={handleChange} city={profile.city}/>
              <Button type="Submit" variant="info" className="mr-auto btn-block"><FaSearch/></Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
  let card; if (data) {
    card = <ProfileCard {...props} list={data.profiles}/>
  }; return <section>{search}<br/><br/>{card}</section>
}

export default Search
