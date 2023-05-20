import { useDispatch, useSelector } from "react-redux";
import { selectLaptop } from "./store/reducers/laptopSlice";
import { addItemToCart, selectCart } from "./store/reducers/cartSlice";


const App3 =() => {
    const laptop = useSelector(selectLaptop)
    const cart = useSelector(selectCart)
    const setState = useDispatch()
    console.log(cart);

    let Total = 0;
    if(Array.isArray(cart)){

        cart.forEach(ele=>{
            Total = Total+ (ele.count * ele.price)
        
        })
    }
    let cartCount = 0;
            cart.forEach(ele => {
                cartCount += ele.count
            })
            
    return (<div>
        {laptop.map(({price,cpu,ram,id})=> 
        (<p key={id}>
            {price} | {id} | {cpu} | {ram} {''}
            <button onClick={()=>setState(addItemToCart(id,price,cpu,ram))}>Add To Cart</button>
        </p>
        ))}
        <br/>
        
        <h1>Cart</h1>
        <hr/>
        <h3>{cartCount}</h3>
        <h3>Total: ${Total}</h3>
    </div>)
};
export default App3;