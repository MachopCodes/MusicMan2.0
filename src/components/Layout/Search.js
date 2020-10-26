import React, { useState, Fragment } from 'react'
import axios from 'axios'
import apiUrl from '../../api/config'
import { Button, Form, Col } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import ProfileCard from '../Profile/ProfileCards'
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
    e.preventDefault()
    const fetchData = async () => {
      const res = await axios({
        method: 'GET',
        url: apiUrl + '/profiles',
        params: { profile }
      })
      setData(await res.data)
    }
    fetchData().catch((err) => console.log(err))
  }

  const search = (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <Instruments change={handleChange}/>
        <Interests change={handleChange}/>
        <City change={handleChange} city={profile.city}/>
        <State change={handleChange} state={profile.state}/>
        <Col><Button type="Submit" variant="dark" className="mr-auto"><FaSearch/></Button></Col>
      </Form>
    </Fragment>
  )
  let card; if (data) {
    card = <ProfileCard {...props} list={data.profiles}/>
  }
  return <section>{search}{card}</section>
}

export default Search
