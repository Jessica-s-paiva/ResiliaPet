import React from 'react'
import NavBar from '../NavBar/NavBar'
import S from './Header.module.css'
import Dog from '../../images/Dog.svg'
const Header = () => {
  return (
    <header>
      <div><img src={Dog} alt="cachorro" className={S.img}/></div>
      <NavBar />
    </header>
  )
}

export default Header