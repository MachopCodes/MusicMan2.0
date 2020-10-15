import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import TextContainer from '../TextContainer/TextContainer'
import Messages from '../Messages/Messages'
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'
import { postMessageTo, postMessageFrom } from '../../../api/message'

import './Chat.css'

const ENDPOINT = 'http://localhost:4741'

let socket

const Chat = ({ user, location, setUser, opers, setOpers }) => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const { name, room, to } = queryString.parse(location.search)

  useEffect(() => {
    socket = io(ENDPOINT)
    socket.emit('join', { name, room }, (error) => {
      if (error) { alert(error) }
    })
    return () => socket.close()
  }, [ENDPOINT, location.search])

  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ])
      postMessageFrom(message, user, to, room)
      postMessageTo(message, user, to, room)
        .then((res) => setUser(res.data))
    })

    socket.on('roomData', ({ opers }) => {
      setOpers(opers)
    })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault()

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  return (
    <div className='outerContainer'>
      <div className='container'>
        <InfoBar room={room} />
        <Messages messages={messages} userMessages={user.messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer opers={opers}/>
    </div>
  )
}

export default Chat
