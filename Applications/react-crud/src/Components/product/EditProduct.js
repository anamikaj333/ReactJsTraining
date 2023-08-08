import React,{useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import axios from 'axios'

function EditProduct() {
    const navigate=useNavigate();
    const params=useParams();
    let id = params.pid;

    const {register,handleSubmit,formState:{errors},reset}=useForm({
        defaultValues:{
            "productName":"",
            "brandName":"",
            "price":""
        }
    })

    function getProductDetails(){
        axios.get(`http://localhost:3001/products/${id}`)
        .then(resp=>{
            // console.log(response)
            reset(resp.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        getProductDetails();
    },[])


    function updateProduct(data){

        // console.log(data);
        axios.put(`http://localhost:3000/products/${id}`,data)
        .then(response=>{
            navigate('/product')
        })
        .catch((error=>{
            navigate('/product')
        }))
    }
    
  return (
    <div>
      <form onSubmit={handleSubmit(updateProduct)}>

<table>

    <tr>

        <td><label>Product Name</label></td>

        <td><input type='text' {...register('productName',

        {required:true,pattern:/^[\w\s-]+$/})}></input></td>

        {errors.productName && errors.productName.type=='required'

        &&<td>Product Name Cant't be blank</td>}

    {errors.productName && errors.productName.type=='pattern'

        &&<td>Name should hot have any special char</td>}

        {/* <td><input type='text'

            name={name}

            ref={ref}

            onChange={onChange}

            onBlur={onBlur}

        ></input></td> */}

    </tr>

    <tr>

        <td><label>Brand Name</label></td>

        <td><input type='text' {...register('brandName',{required:true})}></input></td>

        {errors.brandName && errors.brandName.type=='required'&& <td>Brand Name Can't be blank</td>}

    </tr>

    <tr>

        <td><label>Price</label></td>

        <td><input type='number' {...register('price',{required:true, max:80000})}></input></td>

        {errors.price && errors.price.type=='required'&&<td>Price Can't be blank</td>}

        {errors.price && errors.price.type=='max' &&<td>Price should not be more than 80000 rs.</td>}

    </tr>

    <tr>

        <td></td>

        <td><button type='submit'>Update Product</button></td>

    </tr>

</table>

</form>
    </div>
  )
}

export default EditProduct
