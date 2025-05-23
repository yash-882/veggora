import React from 'react'
import { Link } from 'react-router'
import { dairy, snacks, personalCare, beverages, fruitsAndVegetables, babyCare } from "@constants/categories.js"
import createUrlPath from '../../utils/functions/create-url-path'
// categories of products
const categories = [
  [[...fruitsAndVegetables], 'Fruits & Vegetables'],
  [[...dairy], 'Dairy'],
  [[...snacks], 'Snacks'],
  [[...babyCare], 'Baby Care'],
  [[...beverages], 'Beverages'],
  [[...personalCare], 'Baby Care'],
]


function ProductCategories() {
  return (
    <div className="row gap-lg-4 gap-2 mb-3 px-2 py-2  gap-xl-4 justify-content-evenly text-white">
      
      {
        // Each individual category (dairy, snacks, etc)
        categories.map(([category, categoryName], index) => (
          <div
            className={
              `col-12 col-md-10 row category-list py-1 col-sm-10
              ${category.length > 4 ? 'col-xl-12 order-first col-lg-12' : 'col-xl-4 col-lg-6'}
              ${category.length < 4 ? 'order-last' : ''}`
            }
            key={index}
          >
            {/* heading */}
            <div className='d-flex mb-2 category-heading justify-content-between'>
              <span className='category-name'>{categoryName}</span>
              <span>
                <Link
                  to={`/products/${createUrlPath(categoryName)}`}
                  className='text-decoration-none see-all-category-link fw-light'>
                  See all
                </Link>
              </span>
            </div>

            {
              // each item in the category (chips, milk, etc)
              category.map((prod, prodIndex) => (
                <div
                  className={`col-3 p-1 ${category.length > 4 ? 'col-xl-1 col-md-2 col-lg-2' : 'col-xl-3 col-md-2 col-lg-3'}`}
                  key={prodIndex}
                >
                  <div className="h-100 w-100 p-1 rounded-3 bg-dark">
                    <Link
                      to={`/products/${createUrlPath(categoryName)}/${createUrlPath(prod.productName)}`}
                      className="h-100 w-100 category-link rounded-2 nav-link d-flex flex-column align-items-center justify-content-center"
                    >
                      <img src={prod.imageUrl} alt="" className="img-fluid" />
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
  );
}

export default ProductCategories;
