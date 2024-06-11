import React from 'react'
import './Residency.css'
import {Swiper, SwiperSlide, SwperSlide, useSwiper}from 'swiper/react'
import 'swiper/css'
import data from "../../utility/Slider.json"
import {sliderSettings}from '../../utility/common'
 function Residency() {
  return (
    <>
     <div className="r-wrapper">
      <div className='r-head flexColStart'>
       <span className='orangeText'>Best Choices</span>
       <span className='secondaryText'>Popular Residency</span>
      </div>
      <Swiper{...sliderSettings} >
       {data.map((card,i)=>(
        <SwiperSlide key={i}>
            <div className="r-card">
                <img src={card.image}alt="img" />
                
                <h1 className='secondaryText'>${card.price}</h1>
                <h1 className=' orangeText'>{card.name}</h1> 
                <span className='secondaryText'>{card.detail}</span>
                
               
            </div>

        </SwiperSlide>
       ))}
      </Swiper>
     </div>

    
    </>
  )
}
export default Residency
