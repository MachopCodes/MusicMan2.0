import io from 'socket.io-client'
const ENDPOINT = 'http://localhost:4741'

const socket = io(ENDPOINT)

export const disconnect = () => {
  socket.disconnect(true)
}
