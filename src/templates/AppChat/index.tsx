import { SocketNamespace, SocketRoom } from 'core/domain/entities/socket'
import { useEffect, useState } from 'react'
import { Socket } from 'socket.io-client'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'
import { connectNamespace, socketClient } from 'utils/socket'

import * as S from './styles'

const socketObjects: Record<
  string,
  Socket<DefaultEventsMap, DefaultEventsMap>
> = {}

const AppChat = () => {
  const [namespaces, setNamespaces] = useState<SocketNamespace[]>([])
  const [rooms, setRooms] = useState<SocketRoom[]>([])
  const [currentNamespace, setCurrentNamespace] = useState('')
  const [currentRoom, setCurrentRoom] = useState('')

  const [isConnected, setIsConnected] = useState(socketClient.connected)

  useEffect(() => {
    socketClient.on('listNamespaces', (data: SocketNamespace[]) => {
      setNamespaces(data)
    })

    return () => {
      socketClient?.close()
    }
  }, [])

  const handleJoinNamespace = async (endpoint: string) => {
    socketClient.emit('joinNamespace', endpoint)

    const currentSocket = await connectNamespace(endpoint)

    if (socketObjects[currentNamespace]) {
      socketObjects[currentNamespace].disconnect()
      delete socketObjects[currentNamespace]
    }

    if (!socketObjects[endpoint]) {
      socketObjects[endpoint] = currentSocket
    }

    setCurrentNamespace(endpoint)

    socketObjects[endpoint].on('listRooms', (rooms: SocketRoom[]) => {
      console.log('rooms', rooms)
      setRooms(rooms)
    })
  }

  const handleJoinRoom = async (roomId: string) => {
    socketObjects[currentNamespace].emit('joinRoom', roomId)

    setCurrentRoom(roomId)
  }

  return (
    <S.Wrapper>
      <S.Header>Header</S.Header>
      <S.MainContent>
        <S.NamespacesWrapper>
          {namespaces.map((namespace) => (
            <S.NamespaceIconWrapper
              key={namespace.namespaceData.id}
              src={namespace.namespaceData.image}
              onClick={() =>
                handleJoinNamespace(namespace.namespaceData.endpoint)
              }
            />
          ))}
        </S.NamespacesWrapper>

        <S.RoomsWrapper>
          {rooms &&
            rooms.map((room) => (
              <S.RoomWrapper
                key={room.socketRoomData.id}
                selected={currentRoom === room.socketRoomData.id}
                onClick={() => handleJoinRoom(room.socketRoomData.id)}
              >
                {room.socketRoomData.name}
              </S.RoomWrapper>
            ))}
        </S.RoomsWrapper>

        <S.HistoryWrapper>
          <h1>HistoryWrapper</h1>
        </S.HistoryWrapper>
      </S.MainContent>
    </S.Wrapper>
  )
}

export default AppChat
