import React from 'react'
import ProductSection from './product-section/ProductSection'
import ExploreSection from './explore-section/ExploreSection'
import TrendingSection from './trending-section/TrendingSection'
import AllproductsSection from './allproducts-section/AllproductsSection'


export default function DisplaySection() {
  return (
    <div>
        <ProductSection/>
        <ExploreSection/>
        <TrendingSection/>
        <AllproductsSection/>
    </div>
  )
}
