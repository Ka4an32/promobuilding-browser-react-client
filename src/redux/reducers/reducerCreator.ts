type handlerType<T> = T extends {
  [key: string]: (state: any, payload: any extends infer U ? U : never) => {}
}
  ? T
  : never

const createHandler =
  <T>(handler: handlerType<T>) =>
  () => ({
    ...handler,
  })

type inferAction<T> = T extends {
  type: string extends infer U ? U : never
  payload: any extends infer P ? P : never
}
  ? T
  : never

function createReducer<S, A>(
  state: S,
  action: inferAction<A>,
  handlerAction: ReturnType<typeof createHandler>,
) {
  const { type, payload } = action
  const handlers = handlerAction()
  const handler = handlers[type] || handlers['DEFAULT']
  handler(state, payload)
}

export { createHandler, createReducer }
