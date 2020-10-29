import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
// import TextContainer from '../TextContainer/TextContainer'
import Messages from '../Messages/Messages'
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'
import { msgFrom, msgTo } from '../../../api/message'
import './Chat.css'
const ENDPOINT = 'http://localhost:4741'
let socket

const Chat = ({ user, location, setUser, opers, setOpers }) => {
  if (user) {
    const { name, room, to } = queryString.parse(location.search)
    const filteredMessages = []; user.messages.map(m => {
      if (m.receiverId === to || m.senderId === to) { filteredMessages.push(m) }
    }); const [msgs, setMsgs] = useState(filteredMessages); const [msg, setMsg] = useState('')
    useEffect(() => {
      socket = io(ENDPOINT); socket.emit('join', { name, room }, (error) => {
        if (error) { alert(error) }
      }); return () => socket.close()
    }, [ENDPOINT, location.search])
    useEffect(() => {
      socket.on('message', msg => {
        setMsgs(msgs => [ ...msgs, msg ])
        msgTo(msg, user, to, room); msgFrom(msg, user, to, room).then((res) => setUser(res.data))
      }); socket.on('roomData', ({ opers }) => setOpers(opers))
    }, []); const sendMessage = (e) => {
      e.preventDefault(); if (msg) { socket.emit('sendMessage', msg, () => setMsg('')) }
    }; return (
      <div className='outerContainer'>
        <div className='container'>
          <InfoBar room={room} />
          <Messages to={to} messages={msgs} name={name} />
          <Input message={msg} setMessage={setMsg} sendMessage={sendMessage} />
        </div>
      </div>
    )
  } else { return <section><h6>You must sign in to access this page</h6></section> }
}

export default Chat
