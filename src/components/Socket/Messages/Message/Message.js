import React from 'react'
import './Message.css'
import ReactEmoji from 'react-emoji'

const Message = ({ message, name }) => {
  let isSentByCurrentOper = false
  const trimmedSender = !message.oper ? message.senderName.trim().toLowerCase() : null
  const trimmedReceiver = !message.oper ? message.receiverName.toLowerCase() : null

  if (name === message.senderName || name.trim().toLowerCase() === message.oper) {
    isSentByCurrentOper = true
  }

  return (
    isSentByCurrentOper
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{message.oper ? message.oper : trimmedSender}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(message.text)}</p>
          </div>
        </div>
      )
      : (
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundLight">
            <p className="messageText colorDark">{ReactEmoji.emojify(message.text)}</p>
          </div>
          <p className="sentText pl-10 ">{message.oper ? message.oper : trimmedReceiver}</p>
        </div>
      )
  )
}

export default Message
