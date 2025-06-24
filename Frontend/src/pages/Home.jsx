import React from 'react'
import Hero from '../componetns/hero'
import LatestCollections from '../componetns/LatestCollections'
import Bestseller from '../componetns/Bestseller'
const home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollections/>
      <Bestseller/>
    </div>
  )
}

export default home
