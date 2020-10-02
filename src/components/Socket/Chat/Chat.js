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

const Chat = ({ user, location }) => {
  const [opers, setOpers] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const { name, room, to } = queryString.parse(location.search)

  useEffect(() => {
    socket = io(ENDPOINT)

    socket.emit('join', { name, room }, (error) => {
      if (error) { alert(error) }
    })
  }, [ENDPOINT, location.search])

  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ])
      postMessageTo(message, user, to).then(postMessageFrom(message, user, to))
      console.log('useEffect triggered messages are: ', JSON.stringify(user.messages))
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
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer opers={opers}/>
    </div>
  )
}

export default Chat
