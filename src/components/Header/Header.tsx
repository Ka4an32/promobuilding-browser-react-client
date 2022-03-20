import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { NavLink } from 'react-router-dom'

// TYPES
import { AppDispatch, RootState } from '../../redux/store'
import { PopupType } from '../../types/popupTypes/basePopupType'

// CONSTANT
import popupsID from '../../constants/common/popupsID/popupsID'
import getParams from '../../constants/common/getParametrs/getParametrs'
import viewTemplate from '../../constants/config/viewTemplate/viewTemplate'
import PopupActions from '../../redux/actions/popupActions/popupActions'

type Props = ConnectedProps<typeof connector>

const TemplateConfig = {
  registration: {
    [viewTemplate.MODAL]: `?${getParams.POPUP_ID}=${popupsID.SIGN_IN}`,
    [viewTemplate.PAGE]: `/reg`,
  },
  authorization: {
    [viewTemplate.MODAL]: `?${getParams.POPUP_ID}=${popupsID.SIGN_UP}`,
    [viewTemplate.PAGE]: `/auth`,
  },
  feedback: {
    [viewTemplate.MODAL]: `?${getParams.POPUP_ID}=${popupsID.FEEDBACK}`,
    [viewTemplate.PAGE]: `/feedback`,
  },
  FAQ: {
    [viewTemplate.BLOCK]: '/#',
    [viewTemplate.PAGE]: '/FAQ',
  },
}

const Header = (props: Props) => {
  const REGISTRATION = props.config.templateConfig.registration
  const FEEDBACK = props.config.templateConfig.feedback
  const FAQ = props.config.templateConfig.FAQ

  return (
    <header>
      <NavLink to={'/'}>MAIN</NavLink>
      <NavLink to={TemplateConfig.registration[REGISTRATION]}>SIGN_IN</NavLink>
      <NavLink to={TemplateConfig.authorization[REGISTRATION]}>SIGN_UP</NavLink>
      <NavLink to={TemplateConfig.feedback[FEEDBACK]}>FEEDBACK</NavLink>
      <NavLink to={TemplateConfig.FAQ[FAQ]}>FAQ</NavLink>
      <button
        onClick={() => {
          props.showPopup({
            message: 'Попап успешно открыт',
            title: 'Успех!',
            type: 'error',
          })
        }}
      >
        popup
      </button>
    </header>
  )
}

const connector = connect(
  (state: RootState) => ({
    config: state.ConfigReducer,
  }),
  (dispatch: AppDispatch) => ({
    showPopup: (config: PopupType) => {
      dispatch(PopupActions.showPopup(config))
    },
  }),
)

export default connector(Header)
