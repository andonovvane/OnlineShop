import { useEffect, useState } from "react";
import axios from 'axios'

export default function Shop () {
    const [products, setProducts] = useState([])


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

    if (products.length === 0) {
        return <p>Loading...</p>;
    } else {
        return (
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="section">
                        <div  className="product-card">
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <h3>CHF {product.price}</h3>
                        </div>
                        <div>
                            <button>Add to card</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}