import React from 'react'

function CarBulletPoints({ modelName, year, listPrice, colors, mileage, power, maxSpeed }) {
    return (
      <div>
        <h2>{modelName} ({year})</h2>
        <p>List Price: ${listPrice}</p>
        <p>Available Colors: {colors.join(', ')}</p>
        <p>Mileage: {mileage} miles</p>
        <p>Power: {power} BHP</p>
        <p>Max Speed: {maxSpeed} mph</p>
      </div>
    );
  }

export default CarBulletPoints