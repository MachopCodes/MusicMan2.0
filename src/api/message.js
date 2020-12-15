import apiUrl from './config'
import axios from 'axios'

export const saveMessage = (name, recipient, room, message) => {
  const messageObject = { oper: name.trim().toLowerCase(), text: message }
  return axios({
    method: 'POST',
    url: apiUrl + '/message',
    data: {
      name,
      recipient,
      room,
      message: messageObject
    }
  })
}

export const textFrom = (data) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/messageto',
    data
  })
}

export const deleteMessage = (messageId, user) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/message/' + user._id,
    headers: { 'Authorization': 'Token token=' + user.token },
    data: { messageId }
  })
}

export const getUser = id => {
  return axios({
    method: 'GET',
    url: apiUrl + '/message/' + id
  })
}
