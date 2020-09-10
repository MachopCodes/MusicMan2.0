import React, { useEffect, useState } from 'react'
import ProfileCard from './ProfileCards'
import axios from 'axios'
// import { indexProfile } from '../../api/profile'
import apiUrl from '../../apiConfig'
// import messages from '../AutoDismissAlert/messages'

const IndexProfile = props => {
  const [data, setData] = useState('')
  const fetchData = async () => {
    const response = await axios({
      method: 'GET',
      url: apiUrl + '/profiles'
    })
    setData(await response.data)
  }
  useEffect(() => {
    fetchData()
      .catch((err) => console.log(err))
  }, [])

  let jsx
  if (!data) {
    jsx = <h1>loading...</h1>
  } else {
    jsx = <ProfileCard {...props} setData={setData} list={data.profiles} />
  }
  return (
    <div>{jsx}</div>
  )
}

export default IndexProfile
