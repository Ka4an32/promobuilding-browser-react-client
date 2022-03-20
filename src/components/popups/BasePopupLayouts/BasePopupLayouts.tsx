import React from 'react'
import './popup-wrapper.scss'
import './popup.scss'

const BasePopupLayout = (props: any) => {
  return (
    <div
      onMouseDown={() => {
        if (props.config.urlParam) {
          history.back()
        }
        props.hidePopup()
      }}
      className={`popup-wrapper popup-wrapper_${props.className}`}
    >
      <div
        onMouseDown={(e) => {
          e.stopPropagation()
        }}
        className={`popup popup_${props.config.type}`}
      >
        {props.children}
      </div>
    </div>
  )
}

export default BasePopupLayout
