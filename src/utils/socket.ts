import { io, Socket } from 'socket.io-client'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'

let socketInstance: Socket<DefaultEventsMap, DefaultEventsMap> = io()

export const initializeSocket = async () => {
  await fetch('/api/socket')

  socketInstance = io()

  return socketInstance
}

export const socket = socketInstance
