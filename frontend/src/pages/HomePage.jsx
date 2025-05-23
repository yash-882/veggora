import React from 'react'
import ProductCategories from '@components/home-page/ProductCategories.jsx'

function HomePage() {

  return (
    // HOME PAGE
    <div className='container-fluid'>

      {/* home page section 1 */}
      <div className='container-fluid px-0 homepage-section-1 '>
        {/* display few categories */}
        <h5 className='text-white text-center fw-bolder'>What are you looking for?</h5>
        <ProductCategories/>
      </div>
    </div>
  )
}

export default HomePage
