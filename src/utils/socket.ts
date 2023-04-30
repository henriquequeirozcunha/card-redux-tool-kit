import { io, Socket } from 'socket.io-client'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'

let socketInstance: Socket<DefaultEventsMap, DefaultEventsMap> = io()

export const initializeSocket = async () => {
  await fetch('/api/socket')

  socketInstance = io('http://localhost:3000')

  return socketInstance
}

export const connectNamespace = async (endpoint: string) => {
  const url = `http://localhost:3000/api/socket${endpoint}`

  return io(endpoint)
}

export const socketClient = socketInstance
