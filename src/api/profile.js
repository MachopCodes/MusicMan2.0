import apiUrl from '../apiConfig'
import axios from 'axios'

export const createProfile = (data, token) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/profiles',
    headers: {
      'Authorization': `Token token=${token}`
    },
    data
  })
}

export const editProfile = (data, id, token) => {
  console.log('data in edit is: ', data)
  return axios({
    method: 'PATCH',
    url: apiUrl + '/profiles/' + id,
    headers: {
      'Authorization': 'Token token=' + token
    },
    data
  })
}
