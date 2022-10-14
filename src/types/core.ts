// utils

export namespace Core {
  export type RequiredKeys<T, K extends keyof T> = {
    [P in K]-?: T[P]
  } & { [P in Exclude<keyof T, K>]?: T[P] }

  export type Object<T = any> = Record<string, T>

  export type NameValue = {
    Name: string
    Value: string
  }
}
