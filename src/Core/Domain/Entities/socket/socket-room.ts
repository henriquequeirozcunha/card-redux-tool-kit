import { SocketMessage } from '.'

export type SocketRoomData = {
  id: string
  name: string
  namespace_id: string
  private_room: boolean
  history?: SocketMessage[]
}

export class SocketRoom {
  constructor(public socketRoomData: SocketRoomData) {}

  addMessage(message: SocketMessage) {
    if (!this.socketRoomData.history) this.socketRoomData.history = []
    this.socketRoomData.history.push(message)
  }

  clearHistory() {
    this.socketRoomData.history = []
  }
}
