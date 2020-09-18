import apiUrl from './config'
import axios from 'axios'

export const createReview = (data, token) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/reviews',
    headers: {
      'Authorization': 'Token token=' + token
    },
    data
  })
}
