import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function ProductDetail({data}){
  const {id}=useParams()
   const item=data[id];
    return(
        
        <>
        <div class="card card-side bg-base-100 shadow-sm">
  <figure>
    <img className="w-1/3"
      src={item.images}
      alt="Movie" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{item.brand
}</h2>
    <h2 class="card-title text-blue-600">Dimension:</h2>
    <p>width:{item.dimensions.width} height:{item.dimensions.height} depth:{item.dimensions.depth}</p>
    <h2 class="card-title text-blue-600">Return policy:</h2>
    <p>{item.returnPolicy}</p>
    <h2 class="card-title text-blue-600">WarantyInfo:</h2>
    <p>{item.warrantyInformation}</p>
    <div class="card-actions justify-end">
      <Link class="btn btn-primary" to="/">Go back</Link>
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </>
    )
}
export default ProductDetail;