declare interface Credentials {
  email?: string | undefined
  password?: string | undefined
  provider?: 'bitbucket' | 'github' | 'gitlab' | 'google' | undefined
}

declare interface Todo {
  id?: number
  user_id: string
  task: string
  is_complete?: boolean
  inserted_at?: string
}

declare interface Bingo {
  id?: number
  user_id: string
  state: number
}
