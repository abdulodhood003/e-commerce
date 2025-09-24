import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/latestcollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <Newsletter />
      
    </div>
  )
}

export default Home