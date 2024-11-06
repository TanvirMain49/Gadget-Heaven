import { useEffect, useState } from "react";
import { getCartFromWish} from "../Utilts";
import Cart from "./Cart";

const WishCart = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        const card = getCartFromWish();
        setProduct(card);
      }, []);
      console.log(products)
    return (
        <div>
            <h1 className="text-2xl font-bold py-2">Wishes</h1>
        <div className="py-8">
            {
                products.map(product => <Cart key={product.product_id} product={product}></Cart>)
            }
        </div>
        </div>
    );
};

export default WishCart;