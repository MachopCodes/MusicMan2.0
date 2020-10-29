import apiUrl from './config'
import axios from 'axios'

export const msgFrom = (message, user, to, room) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/messagefrom',
    headers: { 'Authorization': 'Token token=' + user.token },
    data: {
      receiverName: room,
      receiverId: to,
      senderName: user.name,
      senderId: user._id,
      text: message.text
    }
  })
}

export const msgTo = (message, user, to, room) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/messageto',
    headers: { 'Authorization': 'Token token=' + user.token },
    data: {
      receiverName: room,
      receiverId: to,
      senderName: user.name,
      senderId: user._id,
      text: message.text
    }
  })
}

export const deleteMessage = (data, user) => {
  console.log('data is: ', data)
  return axios({
    method: 'DELETE',
    url: apiUrl + '/messages/' + user._id,
    headers: { 'Authorization': 'Token token=' + user.token },
    data: { profileId: data }
  })
}

export const getUser = id => {
  return axios({
    method: 'GET',
    url: apiUrl + '/get-user/' + id
  })
}
