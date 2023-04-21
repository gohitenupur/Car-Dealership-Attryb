import React from 'react'
import CarComponent from './CarComponent'
import {cararr} from './cardata'
import './carlist.css'

function CarList() {
    
    const cardetailsarr = cararr;
    console.log(cararr)
  return (
    <div className='center'>
      {cardetailsarr.map((item)=> { return <CarComponent data={item}/> })}
    </div>
  )
}

export default CarList