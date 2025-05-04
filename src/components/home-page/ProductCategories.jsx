import React from 'react'
import categories from "@constants/categories"

function ProductCategories() {

  return (
    //contains categories including types and images
    <>
    <div
      className='text-light category-container homepage-elements col-11 col-xl-11  text-center py-1 px-1 px-xl-1'>
      <p className='py-1 fw-bolder '>
       What are you looking for?
        </p>

      {/* categories list */}
      <ul className='list-unstyled gy-4 gy-xl-0   justify-content-evenly row'>

        {
          // 
         Object.keys(categories).map((category) => (

            // list categories 
            <li
              className='col-4  col-xl-1 col-lg-1 category-label'
              key={category}>
              <a
                href=""
                className='  d-flex flex-column align-items-center'>
                {/*category image */}
                <img
                  src={categories[category].image}
                  alt=""
                />

                {/* category name */}
                <span>{categories[category].label}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
    
    </>
  )
}

export default ProductCategories;
