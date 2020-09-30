import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import TextContainer from '../TextContainer/TextContainer'
import Messages from '../Messages/Messages'
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'

import './Chat.css'

const ENDPOINT = 'http://localhost:4741'

let socket

const Chat = ({ location }) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [opers, setOpers] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  console.log('messages are: ', messages)
  console.log('message is: ', message)

  useEffect(() => {
    const { name, room } = queryString.parse(location.search)

    socket = io(ENDPOINT)

    setRoom(room)
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error)
      }
    })
  }, [ENDPOINT, location.search])

  useEffect(() => {
    socket.on('message', message => {
      console.log('in socket on message is :', message)
      setMessages(messages => [ ...messages, message ])
    })

    socket.on('roomData', ({ opers }) => {
      setOpers(opers)
    })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault()

    if (message) {
      console.log('a message was sent!', message)
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
