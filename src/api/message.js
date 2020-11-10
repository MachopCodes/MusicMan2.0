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
