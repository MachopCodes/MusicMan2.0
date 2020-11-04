import React, { useState, useEffect } from 'react'
import queryString from 'query-string'

import Messages from '../Messages/Messages'
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'

import './Chat.css'

import io from 'socket.io-client'
import { msgFrom, msgTo } from '../../../api/message'
import apiUrl from '../../../api/config'
const ENDPOINT = apiUrl

let socket

const Chat = ({ user, location, setUser, opers, setOpers, to }) => {
  if (user) {
    const { name, room } = queryString.parse(location.search)
    const receiverName = room.substr(0, room.indexOf(' '))
    const filteredMessages = []
    user.messages.map(m => {
      if (m.receiverId === to || m.senderId === to) { filteredMessages.push(m) }
    })
    const [msgs, setMsgs] = useState(filteredMessages)
    const [msg, setMsg] = useState('')

    useEffect(() => {
      socket = io(ENDPOINT)
      socket.emit('join', { name, room }, (error) => {
        if (error) { alert(error) }
      })
      return () => socket.close()
    }, [ENDPOINT, location.search])

    useEffect(() => {
      socket.on('message', msg => {
        setMsgs(msgs => [ ...msgs, msg ])
        msgTo(msg, user, to, receiverName, room)
        msgFrom(msg, user, to, receiverName, room).then((res) => setUser(res.data))
      })
      socket.on('roomData', ({ opers }) => setOpers(opers))
    }, [])

    const sendMessage = (e) => {
      e.preventDefault()
      if (msg) { socket.emit('sendMessage', msg, () => setMsg('')) }
    }; return (
      <div className='outerContainer'>
        <div className='container'>
          <InfoBar room={receiverName} />
          <Messages to={to} messages={msgs} name={name} />
          <Input message={msg} setMessage={setMsg} sendMessage={sendMessage} />
        </div>
      </div>
    )
  } else {
    return <section><h6>You must sign in to access this page</h6></section>
  }
}

export default Chat
