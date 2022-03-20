import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from '../components/Header/Header'
import PopupManagment from '../components/popups/PopupManagment'

// PAGES
import FAQ from '../pages/FAQ/FAQ'
import MainPage from '../pages/MainPage/MainPage'

const BaseLayout = () => {
  return (
    <>
      <Header></Header>
      <div>
        <Routes>
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
      <footer>Footer</footer>
      <PopupManagment />
    </>
  )
}

export default BaseLayout
