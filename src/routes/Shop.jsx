import { useEffect, useState } from "react";
import axios from 'axios'
import { addItem } from "../store/slices/cart";
import { useDispatch } from "react-redux"

const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
        return text;
    } else {
        return text.substring(0, maxLength).trim() + '...';
    }
}

export default function Shop () {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()


    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products')
            console.log(response.data)
            setProducts(response.data.products)
        } catch (error) {
            console.log(error
            )
        }
                    
    }
    
    useEffect(() => {
        fetchProducts();
    }, [])

    const addToCart = (id) => {
        dispatch(addItem(id))
    }

    if (products.length === 0) {
        return <p>Loading...</p>;
    } else {
        return (
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="section">
                        <div  className="product-card">
                            <h2>{product.title}</h2>
                            <p>{truncateText(product.description, 80)}</p>
                            <h3>CHF {product.price}</h3>
                        </div>
                        <div>
                            <button onClick={() => addToCart(product)}>Add to card</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}