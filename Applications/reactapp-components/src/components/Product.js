import React from 'react'

function Product(props) {
  return (
    <>
        {/* Product Name: {props.productName}<br></br>
        Price :{props.price} */}
        {/* for object props used */}
        {/* ProductName:{props.product.productName} <br></br>
        BrandName: {props.product.brandName}<br></br>
        Price: {props.product.price} */}
        <table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th> Brand Name</th>
                    <th> Price</th>
                </tr>
            </thead>
            <tbody>
                    {
                        props.products.map((product)=>{
                                return <tr>
                                    <td>{product.productName}</td>
                                    <td>{product.brandName}</td>
                                    <td>{product.price}</td>
                                </tr>
                        })
                    }
            </tbody>
        </table>
    </>
  )
}

export default Product
