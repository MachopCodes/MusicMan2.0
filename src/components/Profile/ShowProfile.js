import React, { useEffect, useState } from 'react'
import EditProfile from './EditProfile'
import apiUrl from '../../api/config'
import axios from 'axios'

const ShowProfile = props => {
  const { msgAlert, match, user } = props
  const [data, setData] = useState('')

  const fetchData = async () => {
    const response = await axios({
      method: 'GET',
      url: apiUrl + '/profiles/' + match.params.id
    })
    setData(await response.data)
  }
  useEffect(() => {
    fetchData().catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <h1> Show Profiles </h1>
      {data.profile
        ? <EditProfile p={data.profile} msgAlert={msgAlert} user={user}/>
        : <br/>}
    </div>
  )
}

export default ShowProfile
