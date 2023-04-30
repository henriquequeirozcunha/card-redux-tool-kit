import { toast } from 'react-toastify'

export const sucessNotification = (
  message: React.ReactNode = 'Registro Inserido com sucesso'
) => {
  toast(message, {
    hideProgressBar: true,
    type: 'success',
    draggable: false
  })
}

export const failureNotification = (
  message: React.ReactNode = 'Ops... algum erro aconteceu'
) => {
  toast(message, {
    hideProgressBar: true,
    type: 'error',
    draggable: false
  })
}

export const warningNotification = (message: React.ReactNode) => {
  toast(message, {
    hideProgressBar: true,
    type: 'warning',
    draggable: false
  })
}
