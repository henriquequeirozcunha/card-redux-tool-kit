import { generateUniqueId } from 'core/application/utils'
import {
  SocketNamespace,
  SocketRoom,
  SocketMessage
} from 'core/domain/entities/socket'
import { Server, Socket } from 'socket.io'
import { mockNamespaces } from '../../../tests/mocks'

type ServerToClientEvents = {
  noArg: () => void
  basicEmit: (a: number, b: string, c: Buffer) => void
  withAck: (d: string, callback: (e: number) => void) => void
  welcome: (message: string) => void
  listNamespaces: (namespaces: SocketNamespace[]) => void
  listRooms: (rooms: SocketRoom[] | undefined) => void
  updateHistory: (messages: SocketMessage[]) => void
  resetListeners: () => void
}

type ClientToServerEvents = {
  hello: () => void
  joinNamespace: (endpoint: string) => void
  joinRoom: (roomId: string) => void
}

type InterServerEvents = {
  ping: () => void
}

type SocketData = {
  name: string
  age: number
}

export type SocketApp = Socket<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>

export type SocketServer = Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>

export default function SocketHandler(req: any, res: any) {
  const io = new Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
  >(res.socket.server)

  res.socket.server.io = io

  const onConnection = (
    socket: Socket<ClientToServerEvents, ServerToClientEvents>
  ) => {
    console.log(`[SERVER] - SOCKET ID: ${socket.id}`)

    socket.emit('welcome', 'Welcome to AppChat Socket Server')

    socket.emit('listNamespaces', mockNamespaces)

    socket.on('joinNamespace', (endpoint) => {
      io.of(endpoint).on('connect', (nsSocket) => {
        nsSocket.on('disconnect', () => {
          console.log(
            `NS-SOCKET ID: ${nsSocket.id} has disconnected from endpoint ${endpoint}`
          )
        })
        console.log(
          `NS-SOCKET ID: ${nsSocket.id} has connected to endpoint ${endpoint}`
        )

        const namespace = mockNamespaces.find(
          (namespace) => namespace.namespaceData.endpoint === endpoint
        )

        if (!namespace) {
          console.log('nao achou a namespace')
          return
        }

        if (!namespace.namespaceData.rooms?.length) {
          const individualRoom = new SocketRoom({
            id: generateUniqueId(),
            name: `[${namespace.namespaceData.name}] - Sala Individual 01`,
            namespace_id: namespace.namespaceData.id,
            private_room: true,
            history: []
          })

          const groupRoom = new SocketRoom({
            id: generateUniqueId(),
            name: `[${namespace.namespaceData.name}] - Sala Grupo 01`,
            namespace_id: namespace.namespaceData.id,
            private_room: true,
            history: []
          })

          namespace.addRoom(individualRoom)
          namespace.addRoom(groupRoom)
        }

        nsSocket.emit('listRooms', namespace.namespaceData.rooms)

        nsSocket.on('joinRoom', (roomId) => {
          Array.from(nsSocket.rooms)
            .slice(1)
            .forEach((roomToLeave) => {
              io.of(endpoint).in(roomToLeave).emit('resetListeners')

              nsSocket.leave(roomToLeave)

              console.log(`Socket ${socket.id} has left room ${roomToLeave}`)
            })

          nsSocket.join(roomId)

          const namespace = mockNamespaces.find(
            (namespace) => namespace.namespaceData.endpoint === endpoint
          )
          const room = namespace?.namespaceData.rooms?.find(
            (room) => room.socketRoomData.id === roomId
          )

          if (room) {
            io.of(endpoint)
              .in(room.socketRoomData.id)
              .emit('updateHistory', room.socketRoomData.history || [])
          }

          console.log(`Socket ${socket.id} has joined room ${roomId}`)
        })
      })
    })
  }

  // Define actions inside
  io.on('connection', onConnection)

  io.on('new_namespace', (namespace) => {
    //console.log('new_namespace', namespace)
  })

  res.end()
}
