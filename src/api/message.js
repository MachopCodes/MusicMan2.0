import apiUrl from './config'
import axios from 'axios'

export const postMessage = (data, token) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/message',
    headers: {
      'Authorization': 'Token token=' + token
    },
    data
  })
}
