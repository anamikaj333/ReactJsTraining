import React,{useState} from 'react'

// export default function AddProduct() {
    export default function AddProduct(props) {
    // [var(currentvalue/current state),setterFunction]=useState(initial value)
           // const [productName,setProductName]=useState("Laptop");
           const [productName,setProductName]=useState("");
           const[price,setPrice]=useState(0);
           const[productQunatity,setProductQuantity]=useState(10);
        function insertProduct(){
            console.log("insereted")
        }
        function setQunantity(quantity){
            props.productAmount=quantity;
            console.log("modified value"+props.productAmount)
        }

//props are not mutable state are mutable.
    return (
    <div>
      <table>
        <tbody>
        <tr>
            <td><label>Product Name</label></td>
            <td><input type="text" value={productName}
            onChange={(e)=>setProductName(e.target.value)}></input></td>
        </tr>
        <tr>
            <td><label>Brand name</label></td>
            <td><input type="text" ></input></td>
        </tr>
        <tr>
        <td><label>Price</label></td>
            <td><input type="text"></input></td>
        </tr>
        <tr>
        <td><label>Product Quantity</label></td>
            <td><input type="text"  value={props.productAmount}
            onChange={(e)=>setQunantity(e.target.value)}></input></td>
        </tr>
        <tr>
            <td></td>
    <td><button onClick={()=>insertProduct()}>Add Product</button></td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}
