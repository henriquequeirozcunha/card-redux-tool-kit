import { createSlice } from '@reduxjs/toolkit'
import io, { Socket } from 'socket.io-client'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'
import { RootState } from './configureStore'

interface SocketState {
  socket: Socket<DefaultEventsMap, DefaultEventsMap> | null
}

const initialState: SocketState = {
  socket: null
}

export const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    connect: (state, action) => {
      const { endpoint } = action.payload
      const socket = io(endpoint)

      return {
        ...state,
        socket
      }
    },
    disconnect: (state) => {
      state.socket?.disconnect()
      state.socket = null
    }
  }
})

export const { connect, disconnect } = socketSlice.actions

export const selectSocket = (state: RootState) => state.socket.socket
