import { Namespace } from 'socket.io'
import { SocketApp, SocketServer } from './socket'

// type CreatedMessageClientToServerEvents = {
//   createdMessage: (message: string) => void
// }

// type CreatedMessageServerToClientEvents = {
//   receive: (message: string) => void
// }

// type CreatedMessageInterServerEvents = {}

// type CreatedMessageSocketData = {}

// const createdMessageNamespace: Namespace<
//   CreatedMessageClientToServerEvents,
//   CreatedMessageServerToClientEvents,
//   CreatedMessageInterServerEvents,
//   CreatedMessageSocketData
// > = io.of('/createdMessage')

export const messageHandler = (io: any, socket: any) => {
  const createdMessage = (msg: string) => {
    console.log('mensagem', msg)
    socket.emit('newIncomingMessage', msg)
  }

  socket.on('createdMessage', createdMessage)
}
