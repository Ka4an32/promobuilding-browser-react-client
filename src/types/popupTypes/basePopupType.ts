export type PopupType = {
  popupId?: string
  type?: 'common' | 'warning' | 'error'
  title?: string
  message?: string
  urlParam?: boolean
}
