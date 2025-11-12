import { FaShoppingCart } from "react-icons/fa";

const Cart=() => {

const items=["Wireless Earbuds","Power Bank","MacBook"];

return(
    <div>
    <h2><FaShoppingCart />Cart</h2>
    {items.length >= 0 && <h4>You have {items.length} items in your cart</h4>}
    <ul>
        <h4>Products</h4>
        {items.map(item => (
        <li key={Math.random}>{item}</li>
    ))}
        
    </ul>
    </div>
)
}

export default Cart