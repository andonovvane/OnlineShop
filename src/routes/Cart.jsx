import { useSelector} from "react-redux"



export default function Cart () {
    const cartItems = useSelector((state) => state.cart)
    console.log(cartItems)

    return (
        // <div>
        //     <ul>
        //         {cartItems.map((item) => (
        //             <li key={item.id}>{item.title}</li>
        //         ))}
        //     </ul>
        // </div>
        // <div className="product-grid">
        //         {products.map((product) => (
        //             <div key={product.id} className="section">
        //                 <div  className="product-card">
        //                     <h2>{product.title}</h2>
        //                     <p>{truncateText(product.description, 80)}</p>
        //                     <h3>CHF {product.price}</h3>
        //                 </div>
        //                 <div>
        //                     <button onClick={() => addToCart(product)}>Add to card</button>
        //                 </div>
        //             </div>
        //         ))}
        //     </div>
        <div className="product-grid">
            {cartItems.map((item) => (
                <div key={item.id} className="section">
                    <div className="product-card">
                        <h2>{item.title}</h2>
                        <h3>CHF {item.price}</h3>
                        <h4>Amount: {item.amount}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
}