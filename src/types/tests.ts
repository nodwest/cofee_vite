import { RenderResult as ReactRenderResult } from '@testing-library/react'

export namespace Test {}

export namespace Chen {
  export type RenderResult<T> = Omit<ReactRenderResult, 'rerender'> & { rerender: (nextProps: T) => void }
  export type Element = (container: HTMLElement) => HTMLElement
  export type TestEventCallback<T> = (renderResult: RenderResult<T>, props: T, iteration?: number) => void
  export type EventParams<T, K extends keyof Result<T> = keyof Result<T>> = Parameters<Result<T>[K]>
  export type EventCall<T, K extends keyof Result<T> = keyof Result<T>> = { method: K; args: EventParams<T, K> }

  export type Result<T> = {
    setProps(withProps: Partial<T>, grouped?: boolean): Result<T>
    group(name: string, grouped?: boolean): Result<T>
    runGroup(name: string, withProps?: Partial<T>, iterations?: number, grouped?: boolean): Result<T>
    test(cb: TestEventCallback<T>, grouped?: true): Result<T>
    click(element: Element, grouped?: boolean): Result<T>
    dblClick(element: Element, grouped?: boolean): Result<T>
    type(element: Element, text: string, options?: { skipSpecialCharacters?: boolean }, grouped?: boolean): Result<T>
    clear(element: Element, grouped?: boolean): Result<T>
    tab(grouped?: boolean): Result<T>
    hover(element: Element, grouped?: boolean): Result<T>
    unhover(element: Element, grouped?: boolean): Result<T>
    upload(element: Element, fileOrFiles: File | File[], grouped?: boolean): Result<T>
    paste(element: Element, text: string, grouped?: boolean): Result<T>
    keyboard(text: string, grouped?: boolean): Result<T>
  }
}
