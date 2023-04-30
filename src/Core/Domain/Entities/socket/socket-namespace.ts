import { SocketRoom } from '.'

export type SocketNamespaceData = {
  id: string
  name: string
  image: string
  endpoint: string
  rooms?: SocketRoom[]
}

export class SocketNamespace {
  constructor(public namespaceData: SocketNamespaceData) {}

  addRoom(room: SocketRoom) {
    if (!this.namespaceData.rooms) this.namespaceData.rooms = []

    this.namespaceData.rooms.push(room)
  }
}
