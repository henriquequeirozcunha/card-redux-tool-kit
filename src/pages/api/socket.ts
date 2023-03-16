import { Server, Socket } from 'socket.io'
import { messageHandler } from './message-handler'

interface ServerToClientEvents {
  noArg: () => void
  basicEmit: (a: number, b: string, c: Buffer) => void
  withAck: (d: string, callback: (e: number) => void) => void
}

interface ClientToServerEvents {
  hello: () => void
}

interface InterServerEvents {
  ping: () => void
}

interface SocketData {
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
  // It means that socket server was already initialised
  if (res.socket.server.io) {
    console.log('Already set up')
    res.end()
    return
  }

  // const io = new Server(res.socket.server, {
  //   cors: {
  //     origin: 'http://localhost:3000'
  //   }
  // })
  const io = new Server(res.socket.server)
  res.socket.server.io = io

  const onConnection = (socket: any) => {
    messageHandler(io, socket)
  }

  // Define actions inside
  io.on('connection', onConnection)

  console.log('Setting up socket')
  res.end()
}
