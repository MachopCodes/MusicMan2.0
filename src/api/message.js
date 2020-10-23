import apiUrl from './config'
import axios from 'axios'

export const postMessageFrom = (message, user, to, room) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/messagefrom',
    headers: {
      'Authorization': 'Token token=' + user.token
    },
    data: {
      receiverName: room,
      receiverId: to,
      senderName: user.name,
      senderId: user._id,
      text: message.text
    }
  })
}

export const postMessageTo = (message, user, to, room) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/messageto',
    headers: {
      'Authorization': 'Token token=' + user.token
    },
    data: {
      receiverName: room,
      receiverId: to,
      senderName: user.name,
      senderId: user._id,
      text: message.text
    }
  })
}

export const deleteMessage = (user, e) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/messages/' + user._id,
    headers: {
      'Authorization': 'Token token=' + user.token
    },
    data: {
      profileId: e.target.value
    }
  })
}
