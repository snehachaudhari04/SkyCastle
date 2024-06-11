import React from 'react'
import './extra.css'
import main from './Main.jpg';
import CountUp from "react-countup";

 

function extra() {
  return (
    <>
    <section className='page1'>
    <div >
      <img src={main} alt="mainimg" />
     </div>
     </section>
      <div className="content">
      <div className='extra-tagline'>
      <div className='prim'>FIND YOUR DREAM 
      <span className='orangeText'> HOME</span> </div>
      <div className='prim'>WHERE<span className='orangeText'>  MEMORIES</span> ARE MADE !</div>
      <div className='search'>
      <input className='serch' type='text' placeholder='Enter Location'></input>
      <button className='serch'>Search</button>
      </div>
      <div className='spandesign'>
        <div className='span1'>
      <span className='prim'>
        <CountUp strat ={8500} end={9000} duration={5}></CountUp>
        <span className='orangeText'>+</span>
        
      </span>
      <span className='orangeText'> DELIEVER PRODUCTS </span>
      </div>
      <div className='span1'>
      <span className='prim'>
      
        <CountUp strat ={30} end={90} duration={5}></CountUp>
        <span className='orangeText'>+</span>
        
      </span>
      <span className='orangeText'> HAPPY CLIENTS</span>
      </div>
      
    </div>
    </div>
    
    </div>
    </>
  )
}

export default extra
