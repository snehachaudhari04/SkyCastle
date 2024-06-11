import React from 'react'
import './Header.css';
import logo from './Logo.png';

function Header() {
  return (
    
    <section className='h-wrapper'>
        
          <div className='header-left'>
            <img  className='imglogo'src={logo} height={300} width={300}alt ="SkyCastleLogo" ></img>
          </div>
            <div className='header-right'>
            <a  className='header-menu primaryText'href="">Residency</a>
            <a className='header-menu primaryText'href="">Residency</a>
            <a className='header-menu primaryText'href="">Residency</a>
            <a className='header-menu primaryText'href="">Residency</a>
            <button className='button'>Contact</button>
            </div>

     </section>
    
  )
}

export default Header
