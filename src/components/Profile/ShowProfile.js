import React, { useEffect, useState } from 'react'
import EditProfile from './EditProfile'
import apiUrl from '../../api/config'
import axios from 'axios'
import messages from '../AutoDismissAlert/messages'

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
    fetchData()
      .catch(error => {
        msgAlert({
          heading: 'Edit Failure: ' + error.message,
          message: messages.showProfileFailure,
          variant: 'danger'
        })
      })
  }, [])

  return (
    <div>
      {data.profile
        ? <EditProfile p={data.profile} msgAlert={msgAlert} user={user}/>
        : <span>loading...</span>}
    </div>
  )
}

export default ShowProfile
