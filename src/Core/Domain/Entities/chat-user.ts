import { User } from './user'

export type ChatUser = Pick<User, 'id' | 'name' | 'avatar'>
