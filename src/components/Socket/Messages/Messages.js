import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message'
import './Message.css'

const Messages = ({ messages, name, to }) => {
  return (
    <ScrollToBottom className="messages">
      {messages.map((m, i) => <div key={i}><Message message={m} name={name}/></div>)}
    </ScrollToBottom>
  )
}

export default Messages
