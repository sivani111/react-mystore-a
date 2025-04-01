import "./Products.css"
import { appContext } from "../App";
import { useContext } from "react";
export default function Products() {
  const {user} = useContext(appContext)
  const products = [
    { id: 1, name: "Product 1", price: 30 },
    { id: 2, name: "Product 2", price: 40 },
    { id: 3, name: "Product 3", price: 45 },
    { id: 4, name: "Product 4", price: 95 },
    { id: 5, name: "Product 5", price: 70 },
    { id: 6, name: "Product 6", price: 25 },
  ];
  return (
    <div>
       {user.name}
      <div className="App-Products-row">
       
        {products.map((value, index) => (
          <div className="App-Products-box" key={index}>
            <h3>{value.name}</h3>
            <h4>{value.price}</h4>
            <button>Add to Cart</button>
            </div>
        ))}
      </div>
    </div>
  );
}