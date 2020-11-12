import React, { useState, Fragment } from 'react'
import axios from 'axios'
import apiUrl from '../../api/config'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import { Badge, Button, Form, Container, Row, Col } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import ProfileCard from '../Profile/Cards/ProfileCards'
import City from '../Profile/Form/City'
import Instruments from '../Profile/Form/Instruments'
import Interests from '../Profile/Form/Interests'
import State from '../Profile/Form/State'
import Loading from './Loading'

const Search = props => {
  const [clicked, setClicked] = useState(false)
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
    setClicked(true)
    const fetchData = async () => {
      const res = await axios({
        method: 'GET', url: apiUrl + '/profiles', params: { profile }
      }); setData(await res.data)
    }; fetchData().catch((err) => console.log(err))
  }
  const search = <span><FaSearch/>  Search for local musicians</span>
  const searchForm = (
    <Fragment>
      <h1 className="brand-name text-center">musicman</h1>
      <p className="text-center small-text bold">A place for musicians to connect for music lessons, gigs, or jams.
      </p>
      <Form onSubmit={handleSubmit}><Instruments change={handleChange}/>
        <Interests change={handleChange}/>
        <State change={handleChange} state={profile.state}/>
        <City change={handleChange} city={profile.city}/>
        <Button type="Submit" variant="info btn-block">{
          clicked ? data ? search : <Loading/> : search
        }</Button>
      </Form>
    </Fragment>
  )
  let card
  data
    ? data.profiles.length > 1
      ? card = <ProfileCard {...props} list={data.profiles} setReceiver={props.setReceiver}/>
      : card = (
        <Fragment>
          <AutoDismissAlert variant="info" heading="no profiles matched your search, please try again"/>
          <div className=" align-items-center d-flex justify-content-center">
            <Badge variant="light"><h6>no results, please try another search</h6></Badge>
          </div>
        </Fragment>
      )
    : card = (<div></div>)
  return (
    <section>
      <Container>
        <Row>
          <Col xl={4} lg={6} md={8} sm={10} xs={12} className="mx-auto">{searchForm}<br/>{card}</Col>
        </Row>
      </Container>
    </section>
  )
}

export default Search
