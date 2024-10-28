import React from 'react'
import Hero from './Hero'
import Category from './Category'
import StaticCards from './StaticCards'
import TrendingProducts from '../shop/TrendingProducts'
import Deals from "./Deals"
import Blog from '../blog/Blog'

const Home = () => {
  return (
   <>
   <Hero/>
   <Category/>
   <StaticCards/>
   <TrendingProducts/>
   <Deals/>
   <Blog/>
   </>
  )
}

export default Home