import apiUrl from './config'
import axios from 'axios'

export const postMessage = (data, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/messages',
    headers: {
      'Authorization': 'Token token=' + user.token
    },
    data
  })
}

export const reply = (data, message, user) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/messages/' + message._id,
    headers: {
      'Authorization': 'Token token=' + user.token
    },
    data
  })
}
