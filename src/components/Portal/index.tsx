import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = {
  children: React.ReactNode
}

const Portal = ({ children }: PortalProps) => {
  const ref = useRef<Element | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#chat-portal')
    console.log('ref.current', ref.current)
    setMounted(true)
  }, [])

  return mounted && ref.current ? createPortal(children, ref.current) : null
}

export default Portal
