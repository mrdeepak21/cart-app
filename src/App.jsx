import Cart from "./components/Cart";
import Product from "./components/Product";

export default function App(){
    return (
        <div className="dark:bg-slate-900 dark:text-white h-dvh flex flex-col item-center justify-center">
            <div className="w-full text-center flex item-center justify-center">
            <Cart/>
            </div>
            <div className="flex flex-row justify-center">
            <Product title="iPhone" price={5000} id={0}/>
            <Product title="MacBook" price={15000} id={1}/>
            <Product title="SSD" price={1000} id={1}/>
            </div>
        </div>
    );
}