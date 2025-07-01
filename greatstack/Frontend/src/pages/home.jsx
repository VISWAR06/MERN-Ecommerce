import React from 'react'
import Hero from '../componetns/hero'
import LatestCollections from '../componetns/LatestCollections'
import Bestseller from '../componetns/Bestseller'
import Policy from '../componetns/Policy'
const home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollections/>
      <Bestseller/>
      <Policy/>
    </div>
  )
}

export default home
