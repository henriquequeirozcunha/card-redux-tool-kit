import { SocketNamespace, SocketRoom } from 'core/domain/entities/socket'
import { useCallback, useEffect, useState } from 'react'
import { Socket } from 'socket.io-client'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'
import { connectNamespace, socketClient } from 'utils/socket'

import * as S from './styles'

const socketObjects: Record<
  string,
  Socket<DefaultEventsMap, DefaultEventsMap>
> = {}

const onUpdateHistory = (historyData: any) => {
  console.log('updateHistory', historyData)
}

const onUpdateRoomDetails = (roomDetail: any) => {
  console.log('onUpdateRoomDetails', roomDetail)
}

const AppChat = () => {
  const [namespaces, setNamespaces] = useState<SocketNamespace[]>([])
  const [rooms, setRooms] = useState<SocketRoom[]>([])
  const [currentNamespace, setCurrentNamespace] = useState('')
  const [currentRoom, setCurrentRoom] = useState<SocketRoom | null>(null)

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
      setRooms(rooms)
    })
  }

  const handleJoinRoom = async (roomId: string) => {
    socketObjects[currentNamespace].emit('joinRoom', roomId)

    const selectedRoom = rooms.find((room) => room.socketRoomData.id === roomId)

    if (selectedRoom) {
      setCurrentRoom(() => selectedRoom)
    }

    socketObjects[currentNamespace].on('resetListeners', () => {
      socketObjects[currentNamespace].off('updateHistory', onUpdateHistory)
      socketObjects[currentNamespace].on('updateHistory', onUpdateHistory)

      socketObjects[currentNamespace].off(
        'updateRoomDetail',
        onUpdateRoomDetails
      )
      socketObjects[currentNamespace].on(
        'updateRoomDetail',
        onUpdateRoomDetails
      )
    })
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
                selected={
                  currentRoom?.socketRoomData.id === room.socketRoomData.id
                }
                onClick={() => handleJoinRoom(room.socketRoomData.id)}
              >
                {room.socketRoomData.name}
              </S.RoomWrapper>
            ))}
        </S.RoomsWrapper>

        <S.HistoryWrapper>
          <S.HistoryHeader>
            <S.RoomName>{currentRoom?.socketRoomData.name}</S.RoomName>
            <S.RoomDetails>
              <span>{}</span>
            </S.RoomDetails>
          </S.HistoryHeader>
          <S.HistoryContent>
            <h1>Content</h1>
          </S.HistoryContent>
          <S.HistoryFooter>
            <h1>Footer</h1>
          </S.HistoryFooter>
        </S.HistoryWrapper>
      </S.MainContent>
    </S.Wrapper>
  )
}

export default AppChat
