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

export const editReview = (data, id, token) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/reviews/' + id,
    headers: {
      'Authorization': 'Token token=' + token
    },
    data
  })
}

export const deleteReview = (data, token) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/reviews/' + data._id,
    headers: {
      'Authorization': 'Token token=' + token
    },
    data
  })
}
