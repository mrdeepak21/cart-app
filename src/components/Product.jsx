import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Product(props){
  const {cartItem,setCartItem} = useContext(CartContext);
    return(
        <div className="flex flex-col border-2 rounded border-white m-3 p-5 text-center">
            {props.title} - ${props.price}
            <button className="border-2 border-green-500 rounded-full mt-3 py-2 px-8 hover:bg-green-900" onClick={()=> 
            setCartItem([...cartItem,{id:props.id,name:props.title,price:props.price}])}
            >Add to cart</button>
        </div>
    );
}