import Todolist from "./Compenent/Todolist"
import Product from "./Compenent/Product"
import { useEffect, useState } from "react"
import ProductDetail from "./Compenent/ProductDetail"
import { BrowserRouter,Routes,Route } from "react-router-dom"
function App() {
  const [product,setproduct]=useState([])
  useEffect(()=>{
    fetch('https://dummyjson.com/products').then((data)=>data.json()).then((value)=>setproduct(value.products))
  },[])
  setTimeout(()=>{
    console.log(product)
  })

  return (
    
    <>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Product data={product}/>} /> 
      <Route path="/productdetail/:id" element={<ProductDetail data={product}/>} /> 
    </Routes>
    
    </BrowserRouter>
      {/* <Product data={product}/> */}
      {/* <ProductDetail data={product}/> */}
    </>
  )
}

export default App
