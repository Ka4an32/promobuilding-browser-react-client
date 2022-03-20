// TYPES
import { ConfigType } from '../../../types/configTypes/configType'
import { ConfigActionsType } from '../../actions/configActctions/configActions'

// CONSTANT
import ACTION_CONSTANT from '../../../constants/actions/constants'

// const handlers = {
//   [ACTION_CONSTANT.CONFIG_CONSTANT.SUCCESS_SET_CONFIG]: (state, payload) => {
//     return state
//   },
// }

const initialState: ConfigType = {
  successLoadStatus: false,
  templateConfig: {
    registration: 'modal',
    feedback: 'modal',
    FAQ: 'page',
  },
}

export default (
  state: ConfigType = initialState,
  action: ConfigActionsType,
): ConfigType => {
  switch (action.type) {
    case ACTION_CONSTANT.CONFIG_CONSTANT.SUCCESS_SET_CONFIG: {
      const config = action.payload.config
      return {
        ...state,
        templateConfig: config,
        successLoadStatus: true,
      }
    }
    //
    case ACTION_CONSTANT.CONFIG_CONSTANT.UNSUCCESS_SET_CONFIG: {
      return state
    }
    //
    default: {
      return state
    }
  }
}
