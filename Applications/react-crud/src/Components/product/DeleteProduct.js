import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import  {useNavigate} from 'react-router-dom'

function DeleteProduct() {

    const params =useParams();
    let id = params.pid;
    console.log("Delete"+id);
    const navigate =useNavigate()

    function removeProductDetails(){
        axios.delete(`http://localhost:3000/products/${id}`)
        .then(response=>{
            console.log("detetedat",response);
            navigate('/product')
        })
        .catch(error=>{console.log(error)})
    }

    useEffect(()=>{
        removeProductDetails();

    },[])
  return (
    <div>
      
    </div>
  )
}

export default DeleteProduct
