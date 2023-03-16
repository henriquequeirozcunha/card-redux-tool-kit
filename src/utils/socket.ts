import { io } from 'socket.io-client'

let socket: any

export const getSocketInstance = async () => {
  if (!socket) {
    socket = await socketInitializer()
  }

  return socket
}

export const socketInitializer = async () => {
  // We just call it because we don't need anything else out of it
  await fetch('/api/socket')

  socket = io()

  socket.on('connect', () => {
    console.log('connected')
  })

  socket.on('newIncomingMessage', (msg: any) => {
    console.log('result socket', msg)
  })

  return socket
}
