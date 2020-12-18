import React, { useEffect, useState } from 'react'
import EditProfile from './EditProfile'
import apiUrl from '../../api/config'
import axios from 'axios'
import m from '../AutoDismissAlert/messages'
import Loading from '../Layout/Loading'

const ShowProfile = props => {
  const { msgAlert, match, user } = props; const [data, setData] = useState('')
  const fetchData = async () => {
    const response = await axios({ method: 'GET', url: apiUrl + '/profiles/' + match.params.id })
    setData(await response.data)
  }
  useEffect(() => {
    fetchData().catch(e => {
      msgAlert({ heading: 'Edit Failure: ' + e.message, message: m.profGetFail, variant: 'danger' })
    })
  }, []); return (
    <div>
      {data.profile
        ? <EditProfile {...props} p={data.profile} msgAlert={msgAlert} user={user}/>
        : <span><Loading/></span>}
    </div>
  )
}

export default ShowProfile
