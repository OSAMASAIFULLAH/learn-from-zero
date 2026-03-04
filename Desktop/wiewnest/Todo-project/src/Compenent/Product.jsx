import { Link } from "react-router-dom";
function Product({data}){
    return(
        <>
        <div className="grid grid-cols-3">

{
    data.map((data)=>
<div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
    className="w-96 h-55"
      src={data.images}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{data.title}</h2>
    <h2 class="card-title">catagory:{data.category}</h2>
    <h2 class="card-title">price:{data.price}$</h2>
    <h2 class="card-title">rating:{data.rating}</h2>
    <p>{data.description}</p>
    <div class="card-actions justify-end">
      <Link to={`/productdetail/${data.id}`} class="btn btn-primary">Detail</Link>
    </div>
  </div>
  </div>)

}

</div>
</>
    )
}
export default Product;