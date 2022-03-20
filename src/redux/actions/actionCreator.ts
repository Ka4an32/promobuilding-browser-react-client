type ActionType = string
type ActionPayload = any

export function ActionCreator<T, P>(type: T, payload: P) {
  return {
    type,
    payload,
  }
}
