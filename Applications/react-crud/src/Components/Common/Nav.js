import React from 'react'
import {BrowserRouter, Route,Routes,Link} from 'react-router-dom'
import ProductDetails from '../product/ProductDetails'

import AddProduct from '../product/AddProduct'
import DeleteProduct from '../product/DeleteProduct'
import EditProduct from '../product/EditProduct'

function Nav() {
  return (
    <div>
    <BrowserRouter>
      <div className='navbar'>
        <Link to ={'product'}>Product Details</Link>
      </div>
        <Routes>
            <Route path='product'>
                <Route index Component ={ProductDetails}></Route>
                <Route path ='add' Component={AddProduct}></Route>
                <Route path ='delete/:pid' Component={DeleteProduct}></Route>
                <Route path ='edit/:pid' Component={EditProduct}></Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Nav
