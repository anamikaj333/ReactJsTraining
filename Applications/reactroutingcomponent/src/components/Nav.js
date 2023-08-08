import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Home from './Home'
import about from './about'
import AddProduct from './AddProduct'
import Customer from './Customer'
import ProductDetails from './ProductDetails'


export default function Nav() {
  return (
    <div>
    <div>
      <h4>Nav</h4>
      <BrowserRouter>
      <div className='navbar'>
        <Link to={'/about'}>about</Link>
        {/* <Link to={'product/add'}>AddProduct</Link> */}
        <Link to={'/addCustomer'}>ProductDetails</Link>
        <Link to={'product'}>ProductDetails</Link>
    </div>

       
        <Routes>
            <Route path ='/' Component={Home}></Route>
            <Route path ='/about' Component={about}></Route>
            <Route path ='/addCustomer' Component={Customer}></Route>
            {/* <Route path ='/addProduct' Component={AddProduct}></Route> */}
            {/* <Route path ='/product/add' Component={AddProduct}></Route> */}
            <Route path ='product'>
                <Route index Component={ProductDetails}></Route>
                <Route path ='add' Component={AddProduct}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
      </div>
      </div>
  
  )
}
