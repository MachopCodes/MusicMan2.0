import apiUrl from './config'
import axios from 'axios'

export const saveMessage = (data) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/message',
    data
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
