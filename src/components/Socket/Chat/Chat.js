import React, { useState, useEffect } from 'react'
import queryString from 'query-string'

import Messages from '../Messages/Messages'
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'

import './Chat.css'

import io from 'socket.io-client'
import { saveMessage } from '../../../api/message'
import apiUrl from '../../../api/config'
const ENDPOINT = apiUrl

let socket

const Chat = ({ user, location, setUser, opers, setOpers }) => {
  if (user) {
    const { name, room } = queryString.parse(location.search)
    let recipient
    const personOne = room.substr(0, room.indexOf(' and '))
    const personTwo = room.substr(room.indexOf(' and ') + 5, room.length)
    personOne === user.name ? recipient = personTwo : recipient = personOne
    let msgHist = user.messages.filter(m => (recipient === m.recipient))
    if (msgHist.length > 0) msgHist = msgHist[0].message
    const [messages, setMessages] = useState(msgHist)
    const [message, setMessage] = useState('')

    useEffect(() => {
      socket = io(ENDPOINT)
      socket.emit('join', { name, room }, (error) => {
        console.log('joining room')
        if (error) alert(error)
      })
      return () => socket.close()
    }, [ENDPOINT, location.search])

    useEffect(() => {
      socket.on('message', message => {
        setMessages(messages => [ ...messages, message ])
      })
      socket.on('roomData', ({ opers }) => setOpers(opers))
    }, [])

    const sendMessage = (e) => {
      e.preventDefault()
      if (message) {
        socket.emit('sendMessage', message, () => {
          saveMessage(name, recipient, room, message).then((res) => {
            setUser(res.data)
            setMessage('')
          })
        })
      }
    }

    return (
      <div className='outerContainer'>
        <div className='innerContainer'>
          <InfoBar recipient={recipient} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
      </div>
    )
  } else {
    return <section><h6>You must sign in to access this page</h6></section>
  }
}

export default Chat
