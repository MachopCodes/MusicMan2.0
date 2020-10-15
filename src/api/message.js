import apiUrl from './config'
import axios from 'axios'

export const postMessageFrom = (message, user, to) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/messagefrom',
    headers: {
      'Authorization': 'Token token=' + user.token
    },
    data: {
      to: to,
      from: user._id,
      text: message.text
    }
  })
}

export const postMessageTo = (message, user, to) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/messageto',
    headers: {
      'Authorization': 'Token token=' + user.token
    },
    data: {
      to: to,
      from: user._id,
      text: message.text
    }
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
