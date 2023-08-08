// import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import Book from './components/Book';
function App() {
  // let pname ="Laptop";
  let products=[{
    "productName" :"Laptop",
    "brandName": "DEL",
    "price": 78000
  },
  {
    "productName" :"TV",
    "brandName": "LG",
    "price": 78000
  },
  {
    "productName" :"cAMERA",
    "brandName": "SONY",
    "price": 78000
  }]

  let books=[{
    bookName:'Book2',
    authorName:'Author1',
    price:400
  },
  {
    bookName:'Book3',
    authorName:'Author1',
    price:400
  },{
    bookName:'Book4',
    authorName:'Author1',
    price:400
  }]
  return (
    <div className="App">
     {/* <Product productName ={pname} price ={9000}></Product> */}
    <Product products ={products}></Product>
    <hr></hr>
   <Book Book ={books}></Book>
    </div>
  );
}

export default App;

/*
Product--props--object
property-value
productName=Laptop
price=9000
product: ---object
*/