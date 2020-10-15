import React from 'react'

import ScrollToBottom from 'react-scroll-to-bottom'

import Message from './Message/Message'

import './Messages.css'

const Messages = ({ messages, name, userMessages }) => {
  // const filteredMessages = userMessages.filter(message => message.to === '5f7761c13fe26a5a20413c24' || message.from === '5f7761c13fe26a5a20413c24')
  // console.log('filteredMessages: ', filteredMessages)
  return (
    <ScrollToBottom className="messages">
      {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
    </ScrollToBottom>
  )
}

export default Messages
