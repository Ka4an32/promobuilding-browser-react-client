import React, { FunctionComponent, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { useLocation } from 'react-router-dom'

//TYPES
import { RootState } from '../../redux/store'
import { AppDispatch } from '../../redux/store'
import { PopupType } from '../../types/popupTypes/basePopupType'

// ACTIONS
import PopupActions from '../../redux/actions/popupActions/popupActions'

// HOOK
import useGetParametr from '../../hooks/useGetParametr/useGetParametr'

// CONSTANT
import PopupsID from '../../constants/common/popupsID/popupsID'
import GetParametrs from '../../constants/common/getParametrs/getParametrs'

// POPUPS
import SignUpPopup from './SignUp/SignInPopup'
import SignInPopup from './SignIn/SignInPopup'
import DefaultPopup from './Default/DefaultPopup'
import BasePopupLayout from './BasePopupLayouts/BasePopupLayouts'

type Props = ConnectedProps<typeof connector>

const popups: {
  [key: string]: React.FC<any>
} = {
  [PopupsID.SIGN_IN]: SignInPopup,
  [PopupsID.SIGN_UP]: SignUpPopup,
  [PopupsID.DEFAULT]: DefaultPopup,
}

const PopupManagment = ({ popupState, showPopup, hidePopup }: Props) => {
  const popupName = useGetParametr(GetParametrs.POPUP_ID)
  useEffect(() => {
    if (popupName) {
      showPopup({
        popupId: popupName,
        urlParam: true,
      })
    }
  }, [popupName])

  const Popup = popupState.popupConfig.popupId
    ? popups[popupState.popupConfig.popupId] || popups[PopupsID.DEFAULT]
    : popups[PopupsID.DEFAULT]

  const location = useLocation()
  const hideLocationPopup = () => {
    hidePopup()
  }

  return (
    <BasePopupLayout
      hidePopup={hideLocationPopup}
      className={popupState.activeState ? 'visible' : 'hidden'}
      config={popupState.popupConfig}
    >
      <Popup config={popupState.popupConfig} />
    </BasePopupLayout>
  )
}

const connector = connect(
  (state: RootState) => ({
    popupState: state.PopupReducer,
  }),
  (dispatch: AppDispatch) => ({
    showPopup: (config: PopupType) => {
      dispatch(PopupActions.showPopup(config))
    },
    hidePopup: () => {
      dispatch(PopupActions.hidePopup())
    },
  }),
)

export type PopupConfig = PopupType
export default connector(PopupManagment)
