import { useEffect, useState } from "react";
import { getCartFromWish, removeWishCart } from "../Utilts";
import Wishproduct from "../Component/Wishproduct";

const WishCart = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const card = getCartFromWish();
    setProduct(card);
  }, []);

  //!   delate card
  const handleDeleteWish = (id) => {
    console.log(id);
    removeWishCart(id);
    const card = getCartFromWish();
    setProduct(card);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold py-5">Wishes</h1>
      <div className="py-8">
        {products.map((product) => (
          <Wishproduct key={product.product_id} product={product} handleDeleteWish={handleDeleteWish}></Wishproduct>
        ))}
      </div>
    </div>
  );
};

export default WishCart;
