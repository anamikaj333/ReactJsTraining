import React, {useState}from 'react'
// Complete this Add Product with useState
export default function AddProduct() {

    // const[ProductName, setProductName]=useState("");
    // const[Price, setPrice]=useState(0);
    // const[BrandName, setBrandName]= useState("");


    const[product,setProduct]=useState({
        productName:"Laptop",
        brandName:"Sony",
        price:0
    })
    const[products,setProducts]=useState([])
  function addProduct(){
    console.log(product);
    setProducts([...products,product])
   
  }

  function deleteProduct(productName){
    console.log(productName);
    let index =products.findIndex((p)=>p.productName===productName)
    console.log(index)
    let temp=[...products] //array taken in temporary array
    temp.splice(index,1);  //remove one element
    setProducts(temp)    //data passed to original array
  }

  function updateProduct(productName){
    let index =products.findIndex((p)=>p.productName===productName)
    

  }
    return (
    <div>
      <h4>Add Product</h4>
      <div className='products'>
        <table>
            <tr>
                <td><label>Product Name</label></td>
                <td><input type='text' value={product.productName}
                onChange={(event)=>setProduct({...product,productName:event.target.value})}></input></td>
            </tr>
            <tr>
                <td><label>Brand Name</label></td>
                <td><input type='text' value={product.brandName}
                onChange={(event)=>setProduct({...product,brandName:event.target.value})}></input></td>
            </tr>
            <tr>
                <td><label>Price</label></td>
                <td><input type='text' value={product.price}
                onChange={(event)=>setProduct({...product,price:event.target.value})}></input></td>
            </tr>
            <tr>
                <td></td>
                <td><button onClick={()=>addProduct()}>Add Product</button></td>
              </tr>
        </table>
        <table>
            <tr>
                <th>Product Name</th>
                <th>Brand Name</th>
                <th>Price</th>

            </tr>
            {products.map((p)=>{
                return <tr>
                    <td>{p.productName}</td>
                    <td>{p.brandName}</td>
                    <td>{p.price}</td>
                    <td><button onClick={()=>deleteProduct()}>Delete</button></td>
                    <td><button onClick={()=>updateProduct()}>Edit</button></td>
                </tr>
            })
            }
        </table>
      </div>
    </div>
  )
}

