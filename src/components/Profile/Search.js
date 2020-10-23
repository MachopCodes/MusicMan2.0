import React, { useState } from 'react'
import axios from 'axios'
import apiUrl from '../../api/config'
import { Button, Form } from 'react-bootstrap'
import ProfileCard from './ProfileCards'
import City from './Form/City'
import Instruments from './Form/Instruments'
import Interests from './Form/Interests'
import State from './Form/State'

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
  let jsx
  data ? jsx = <ProfileCard {...props} list={data.profiles} /> : jsx =
    <Form onSubmit={handleSubmit}>
      <Instruments change={handleChange}/>
      <Interests change={handleChange}/>
      <City change={handleChange} city={profile.city}/>
      <State change={handleChange} state={profile.state}/>
      <Button type="Submit" variant="dark" className="mr-auto">Submit</Button>
    </Form>
  return jsx
}

export default Search
