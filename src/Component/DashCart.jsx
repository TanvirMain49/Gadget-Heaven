import { useEffect, useState } from "react";
import { getFromStorageCart, removeFromCart } from "../Utilts";
import Cart from "./Cart";

const DashCart = () => {
  const [products, setProduct] = useState([]);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    const card = getFromStorageCart();
    setProduct(card);
  }, []);

  useEffect(()=>{
    const totalPrice = products.reduce((acc, product) => acc + (product.price || 0), 0)
    setPrice(totalPrice)
}, [products])

const handleDeleteCard = (id) =>{
    removeFromCart(id)
    const card = getFromStorageCart();
    setProduct(card);
}


  return (
    <div>
      <div className="flex justify-between py-6">
        <h2 className="font-bold text-2xl">Carts</h2>
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-2xl">Total Price: ${price}</h1>
          <button className="btn rounded-full border-[#9538E2] text-[#9538E2] bg-white font-bold">
            Sort by Price
          </button>
          <button className="btn rounded-full text-white bg-[#9538E2] font-bold">
            Sort by Price
          </button>
        </div>
      </div>
      {products.map((product) => (
        <Cart key={product.product_id} handleDeleteCard={handleDeleteCard} product={product}></Cart>
      ))}
    </div>
  );
};

export default DashCart;
