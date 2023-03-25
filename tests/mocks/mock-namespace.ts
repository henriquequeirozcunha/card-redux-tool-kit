import { generateUniqueId } from 'core/application/utils'
import { SocketNamespace } from 'core/domain/entities/socket'

export const mockNamespaces = [
  new SocketNamespace({
    id: generateUniqueId(),
    name: 'Campanha 1',
    endpoint: '/campaign-1',
    image: '/img/slack.png'
  }),
  new SocketNamespace({
    id: generateUniqueId(),
    name: 'Campanha 2',
    endpoint: '/campaign-2',
    image: '/img/slack.png'
  }),
  new SocketNamespace({
    id: generateUniqueId(),
    name: 'Campanha 3',
    endpoint: '/campaign-3',
    image: '/img/twitter.png'
  }),
  new SocketNamespace({
    id: generateUniqueId(),
    name: 'Campanha 4',
    endpoint: '/campaign-4',
    image: '/img/teams.png'
  }),
  new SocketNamespace({
    id: generateUniqueId(),
    name: 'Campanha 5',
    endpoint: '/campaign-5',
    image: '/img/twitter.png'
  })
]
