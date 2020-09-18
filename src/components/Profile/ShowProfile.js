import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apiUrl from '../../api/config'
import EditProfile from './EditProfile'
// import messages from '../AutoDismissAlert/messages'

const ShowProfile = props => {
  console.log('props in show prof are: ', props)
  const [data, setData] = useState('')
  const fetchData = async () => {
    const response = await axios({
      method: 'GET',
      url: apiUrl + '/profiles/' + props.match.params.id
    })
    setData(await response.data)
  }
  useEffect(() => {
    fetchData()
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <h1> Show Profiles </h1>
      {data.profile
        ? <EditProfile profile={data.profile} msgAlert={props.msgAlert} user={props.user}/>
        : <br/>}
    </div>
  )
}

export default ShowProfile
