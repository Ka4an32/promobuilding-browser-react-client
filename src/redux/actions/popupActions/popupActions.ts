import { ActionCreator } from '../actionCreator'
import ACTION_CONSTANT from '../../../constants/actions/constants'

import { PopupType } from '../../../types/popupTypes/basePopupType'

type InferType<T> = T extends { [key: string]: infer U } ? U : never

const PopupActions = {
  showPopup: (config: PopupType) =>
    ActionCreator(ACTION_CONSTANT.POPUP_CONSTANT.SHOW_POPUP, {
      config,
    } as const),
  hidePopup: () =>
    ActionCreator(ACTION_CONSTANT.POPUP_CONSTANT.HIDE_POPUP, {} as const),
}

export type PopupActionType = ReturnType<InferType<typeof PopupActions>>
export default PopupActions
