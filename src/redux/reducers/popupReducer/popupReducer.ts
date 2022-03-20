import { PopupType } from '../../../types/popupTypes/basePopupType'
import { PopupActionType } from '../../actions/popupActions/popupActions'
import POPUP_CONSTANT from '../../../constants/actions/popup/popup'

type popupState = {
  activeState: boolean
  popupConfig: PopupType
}

const initialState: popupState = {
  activeState: false,
  popupConfig: {
    type: 'common',
    title: 'title',
    message: 'message',
  },
}

export default (
  state: popupState = initialState,
  { type, payload }: PopupActionType,
): popupState => {
  switch (type) {
    case POPUP_CONSTANT.SHOW_POPUP: {
      const id = payload.config.popupId
      const type = payload.config.type
      const title = payload.config.title
      const message = payload.config.message
      const urlParam = payload.config.urlParam
      const popupConfig: PopupType = {
        ...payload.config,
        popupId: id || 'DEFAULT',
        type: type || 'common',
        title: title || '',
        message: message || '',
        urlParam: urlParam || false,
      }
      return {
        ...state,
        activeState: true,
        popupConfig,
      }
    }
    //
    case POPUP_CONSTANT.HIDE_POPUP: {
      return {
        ...state,
        activeState: false,
      }
    }
    //
    default: {
      return state
    }
  }
}
