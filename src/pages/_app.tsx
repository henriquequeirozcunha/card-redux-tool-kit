import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { globalStore } from 'store/configureStore'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { useEffect, useState } from 'react'
import { socketClient, initializeSocket } from 'utils/socket'

function App({ Component, pageProps }: AppProps) {
  const [isConnected, setIsConnected] = useState(socketClient.connected)

  useEffect(() => {
    initializeSocket()

    function onConnect() {
      console.log('app connected to socket')
      setIsConnected(true)
    }

    function onDisconnect() {
      console.log('app disconnected to socket')
      setIsConnected(false)
    }

    socketClient.on('connect', onConnect)
    socketClient.on('disconnect', onDisconnect)

    return () => {
      socketClient.off('connect', onConnect)
      socketClient.off('disconnect', onDisconnect)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Provider store={globalStore}>
        <Head>
          <title>React Avançado - Boilerplate</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="A simple project starter to work with TypeScript, React, NextJS and StyledComponent"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    </ThemeProvider>
  )
}

export default App
