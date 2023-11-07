import React from 'react'
import './Cars.css'
import Shop from '../pages/Shop'

export default function Cars() {
    return (
    <div>
        <div className="filter-container">
            <button className='filter-button'><p>Brand</p></button>
            <button className='filter-button'><p>Model</p></button>
            <button className='filter-button'><p>Year</p></button>
            <button className='filter-button'><p>Mileage</p></button>
            <button className='filter-button'><p>Transmission</p></button>
            <button className='filter-button'>Fuel Type</button>
        </div>
        <div className='cars-container'>
          <Shop />
        </div>
    </div>
  )
}
