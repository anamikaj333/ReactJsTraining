import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
function ProductDetails() {

    const[products,setProducts]=useState([])

    function getProductDetails(){
        axios.get("http://localhost:3000/products")
        .then((response)=>{

        console.log("response:",response);
  
        setProducts(response.data);
  
      }).catch((error)=>{
  
        console.log(error);
  
      })
    }


    useEffect(()=>{
        getProductDetails(); 
    },[])    //for asynchronous behaviour we write empty string which is time interval

  return (
    <div>
      
      <Link to ={'add'}>Add Product</Link>
      <h4>Product Details</h4>
      <table>
        <thead>
            <tr>
              <th>Product ID</th>
                <th>ProductName</th>
                <th>brandName</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {
                products.map((product)=>{
                    return <tr>
                        <td>{product.id}</td>
                        <td>{product.productName}</td>
                        <td>{product.brandName}</td>
                        <td>{product.price}</td>
                        <td><Link to={`delete/${product.id}`}>Delete</Link></td>
                        <td><Link to={`edit/${product.id}`}>Edit</Link></td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default ProductDetails
