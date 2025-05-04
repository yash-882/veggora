import React from 'react'
import ProductCategories from '@components/home-page/ProductCategories.jsx'

function HomePage() {

  return (
    // HOME PAGE
    <div className='container-fluid'>

      {/* home page section 1 */}
      <div className=' row homepage-section-1 justify-content-around'>
        {/* display few categories */}
        <ProductCategories/>
      </div>
    </div>
  )
}

export default HomePage
