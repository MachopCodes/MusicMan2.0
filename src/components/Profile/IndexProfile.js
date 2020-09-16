import React, { useEffect, useState } from 'react'
import ProfileCard from './ProfileCards'
import axios from 'axios'
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
    console.log('response data is: ', response.data)
  }
  useEffect(() => {
    fetchData()
      .catch((err) => console.log(err))
  }, [])

  let jsx
  !data
    ? jsx = <h1>loading...</h1>
    : jsx = <ProfileCard
      {...props}
      list={data.profiles} />
  return (
    <section className="wallpaper container">{jsx}</section>
  )
}

export default IndexProfile
