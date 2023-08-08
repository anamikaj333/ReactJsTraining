import React from 'react'
import { Link } from 'react-router-dom'

function ProductDetails() {
  return (
    <div>
      <h4>Product Details</h4>
      {/* one component link to other component route by Link */}
      <div className='navbar'>
        <Link to ={'add'}>Add Product</Link>
        <Link to ={'/'}>Home</Link>
      </div>
    </div>
  )
}

export default ProductDetails
