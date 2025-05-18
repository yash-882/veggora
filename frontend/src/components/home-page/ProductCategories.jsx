import React from 'react'
import { Link } from 'react-router'
import { dairy, snacks, personalCare, fruitsAndVegetables, babyCare } from "@constants/categories.js"
import createUrlPath from '../../utils/functions/create-url-path'
// categories of products
const categories = [
  [[...fruitsAndVegetables], 'Fruits & Vegetables'],
  [[...dairy], 'Dairy'],
  [[...snacks], 'Snacks'],
  [[...babyCare], 'Baby Care'],
 
]

function ProductCategories() {
  return (
    // contains categories including types and images
    <div className="row gap-3 gap-xl-4 justify-content-evenly text-white">
      {
        // Each individual category(dairy, snacks, ets)
        categories.map(([category, categoryName], index) => (
          <div
            className={
              `col-12 col-md-10 row  category-list py-1 col-sm-10
               ${category.length > 4 ? 'col-xl-12 order-first col-lg-12' : 'col-xl-4  col-lg-6'}
               ${category.length < 4 ? 'order-last':''}`}
            key={index}
          >
            {/* heading */}
            <div className='d-flex mb-2 category-heading justify-content-between '>
              {/* category name */}
              <span
                className='category-name'>
                {categoryName}
              </span>

              {/* Link to all products of a specific category */}
              <span>
                <Link
                  to={`/products/${createUrlPath(categoryName)}`}
                  className='text-decoration-none see-all-category-link  fw-light '>See all</Link>
              </span>
            </div>

            {
              // each item category(chips, milk, etc)
              category.map((prod, prodIndex) => (
                // expands when there is more than 4 items in categories
                <div className={`col-3 p-1 ${category.length > 4 ? 'col-xl-1 col-md-2 col-lg-2' : 'col-xl-3 col-md-2 col-lg-3'} `} key={prodIndex}>

                  <div className="h-100 w-100 p-1 rounded-2 bg-dark">

                    {/* link */}
                    <Link
                      // modify paths (/snacks & sweets -> /snacks-sweets)
                      to={`/products/${createUrlPath(categoryName)}/${createUrlPath(prod.productName)}`}
                      className="h-100 w-100 category-link rounded-2 nav-link d-flex flex-column align-items-center justify-content-center">

                      {/* product image */}
                      <img src={prod.imageUrl} alt="" className="img-fluid" />
                      {/* product label */}
                      <p className="text-center text-break mt-1 mb-0">{prod.productName}</p>
                    </Link>
                  </div>
                </div>
              ))
            }

          </div>
        ))
      }
    </div>
  )
}

export default ProductCategories;
