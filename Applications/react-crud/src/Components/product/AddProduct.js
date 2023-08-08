import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddProduct() {
    const navigate=useNavigate()
    const{register,handleSubmit,formState:{errors}}=useForm(
        {
            defaultValues:{
                "productName":"AC",
                "brandName" :"TATA",
                "price" : 60000
            }
        }

    )    //register is one ueForm method //see in react-form
    
// const{name,ref,onChange,onBlur}=register('productName')
function addProduct(data){
    console.log("Data",data);
    
    axios.post(`http://localhost:3000/products`,data)
    .then((response)=>{
        console.log(response);
        navigate('/product')
    }).catch((error)=>{
        console.log(error);
    })
}

return (
    <div>
      <h4>Add Product</h4>
      <form onSubmit={handleSubmit(addProduct)}>
        <table>
            <tr>
                <td><label>Product Name</label></td>
            <td><input type='text' {...register('productName',{required:true,pattern:'/A-z/'})} ></input></td>
           {errors.productName && errors.productName.type=='required' &&<td>Product name can not be empty</td>}
           {errors.productName && errors.productName.type=='pattern' &&<td>Product name must be in pattern</td>}
           
            </tr>
            <tr>
                <td><label>BrandNmae</label></td>
                <td><input type='text' {...register('brandName')}></input></td>
            </tr>
            <tr>
                <td><label>Price</label></td>
                <td><input type='text' {...register('price',{required:true,max:80000})}></input></td>
                {errors.price &&errors.price.type=='required' && <td>Price shuld not empty</td>} 
                {errors.price && errors.price.type=='max' && <td> price can not be greater than 80000</td>} 
            </tr>
            <tr>
                <td></td>
                <td><button type="submit">Add Product</button></td>
            </tr>
        </table>
      </form>
    </div>
  )
}

export default AddProduct

