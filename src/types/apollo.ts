import { ApolloClient } from '@apollo/client'

export namespace Apollo {
  export type Client = ApolloClient<Record<string, any>>
  export type Response<T> = {
    res: T
  }
}
