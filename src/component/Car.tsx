import React from 'react'
import './Cars.css'

type Car = {
  data: {
    id: number,
    name: string,
    stock: number,
    price: number,
    year: number,
    kilometers: number,
    imgurl: string
  }
}

export default function Car({data}:Car) {
    return (
        <div className='car-listing'>
            <div className='fake-picture'><img src={data.imgurl} alt="" /></div>
            <div className='text-background'>
              <p>{data.name} {data.year} {data.kilometers}</p>
            </div>
        </div>
  )
}
