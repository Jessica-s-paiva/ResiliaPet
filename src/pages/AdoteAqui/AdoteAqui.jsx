import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import S from './AdoteAqui.module.css'
const AdoteAqui = () => {
  return (
    <div className={S.container}>
      <Header />
      <Main />
      <Footer />
    </div>
   
  )
}

export default AdoteAqui