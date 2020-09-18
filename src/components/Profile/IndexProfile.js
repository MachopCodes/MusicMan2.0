import React, { useEffect, useState } from 'react'
import ProfileCard from './ProfileCards'
import axios from 'axios'
import apiUrl from '../../api/config'
import messages from '../AutoDismissAlert/messages'

const IndexProfile = props => {
  const [data, setData] = useState('')
  const fetchData = async () => {
    const res = await axios({ method: 'GET', url: apiUrl + '/profiles' })
    setData(await res.data)
  }

  useEffect(() => {
    fetchData().catch((err) => {
      console.log(err)
      setData(null)
      props.msgAlert({
        heading: 'Could not reach server: ' + err.message,
        message: messages.indexProfileFailure,
        variant: 'danger'
      })
    })
  }, [])

  let jsx
  !data ? jsx = <h1>loading...</h1>
    : jsx = <ProfileCard
      {...props}
      list={data.profiles}
      msgAlert={props.msgAlert} />
  return (<section className="container">{jsx}</section>)
}

export default IndexProfile
