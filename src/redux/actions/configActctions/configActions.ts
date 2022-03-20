// TYPE
import { TemplateConfig } from '../../../types/configTypes/viewTemplateTypes/viewTemplateTypes'

import { ActionCreator } from '../actionCreator'
import ACTION_CONSTANT from '../../../constants/actions/constants'

type InferType<T> = T extends { [key: string]: infer U } ? U : never

const ConfigActions = {
  setConfigAction: (config: TemplateConfig) =>
    ActionCreator(ACTION_CONSTANT.CONFIG_CONSTANT.SUCCESS_SET_CONFIG, {
      config,
    } as const),
  setUnsuccessMessage: (message: string) =>
    ActionCreator(ACTION_CONSTANT.CONFIG_CONSTANT.UNSUCCESS_SET_CONFIG, {
      message,
    } as const),
}

export type ConfigActionsType = ReturnType<InferType<typeof ConfigActions>>
export default ConfigActions
