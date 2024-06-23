import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"

export default function  Cart(){
    const {cartItem} = useContext(CartContext);
    const [cartTotal,setCartTotal] = useState(0);
    useEffect(()=>{
        cartItem && cartItem.map((item)=>setCartTotal(cartTotal+item.price));
    },[cartItem]);
    return (
        <div className="border-2 rounded border-white m-3 p-5 text-center ">
            <div>
            <h2 className="text-5xl underline">Cart</h2>
            <ul className="mt-5 text-left list-disc p-6 w-[500px] h-[200px] overflow-y-scroll">
            { 
            cartItem && cartItem.map((item,id)=>{
            return ( <li key={id}>{item.name} - {item.price}</li>)})  
            }
            </ul>
            </div>
            <h5 className="text-xl mt-10 ">Total -  ${cartTotal}
            </h5>
    </div>
    );
}