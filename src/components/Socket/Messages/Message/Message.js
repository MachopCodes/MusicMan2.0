import React from 'react'

import './Message.css'

import ReactEmoji from 'react-emoji'

const Message = ({ message: { text, oper }, name }) => {
  let isSentByCurrentOper = false

  const trimmedName = name.trim().toLowerCase()

  if (oper === trimmedName) {
    isSentByCurrentOper = true
  }

  return (
    isSentByCurrentOper
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{trimmedName}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      )
      : (
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundLight">
            <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
          </div>
          <p className="sentText pl-10 ">{oper}</p>
        </div>
      )
  )
}

export default Message