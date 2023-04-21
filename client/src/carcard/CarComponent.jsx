import React from 'react'
import CarImage from './CarImage'
import CarBulletPoints from './CarBulletPoints'

function CarComponent(props) {
  const {imgsrc, description, modelName, year, listPrice, colors, mileage, power, maxSpeed} = props.data;
  
  return (
    <div className='container'>
        <div className='left_section'>
        <div><img className='imgcnt' src={imgsrc}></img></div>
        <div>{description}</div>
        </div>
        <div className='right_section'>
        <h2>{modelName} ({year})</h2>
        <p>List Price: ${listPrice}</p>
        <p>Available Colors: {colors.join(',  ')}</p>
        <p>Mileage: {mileage} miles</p>
        <p>Power: {power} BHP</p>
        <p>Max Speed: {maxSpeed} mph</p>
        </div>
    </div>
  )
}

export default CarComponent