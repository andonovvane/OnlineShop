import { useSelector} from "react-redux"
import { addItem, decreaseAmount, removeItem } from "../store/slices/cart"
import { useDispatch } from "react-redux"


export default function Cart () {
    const dispatch = useDispatch()

    const cartItems = useSelector((state) => state.cart)
    console.log(cartItems)

    const increaseAmount = (item) => {
        dispatch(addItem(item))
    }

    const handleDecreaseAmount = (id) => {
        dispatch(decreaseAmount(id))
    }

    const totalAmount = cartItems.reduce((total, item) => {
        return total + item.price * item.amount;
    }, 0);
    
    const handleRemove = (id) => {
        dispatch(removeItem(id))
    }
    return (
        <div>
            <div id="card-header">
                <h1>Cart</h1>
                <hr />
            </div>
            <ul className="cart-ul">
                {cartItems.map((item) => (
                    <li key={item.id} className="cart-li">
                        <div id="cart-title-div">
                            <button onClick={() => handleRemove(item.id)} className="cart-button">x</button>
                            <h2>{item.title}</h2>
                        </div>
                        <div>
                            <button onClick={() => handleDecreaseAmount(item.id)} className="cart-button">-</button>
                            <p>{item.amount}</p>
                            <button onClick={() => increaseAmount(item)} className="cart-button">+</button>
                        </div>
                        <p>{item.price} CHF</p>
                        <p>{item.amount * item.price} CHF</p>
                    </li>
                ))}
            </ul>
            <div id="total-amount">
                <h1>Total: {totalAmount}</h1>
            </div>
        </div>
        );
}