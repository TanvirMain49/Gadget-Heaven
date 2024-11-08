import { useEffect, useState } from "react";
import { getFromStorageCart, removeFromCart } from "../Utilts";
import Cart from "./Cart";
import toast from "react-hot-toast";
import { FaSortAmountDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const DashCart = () => {
  const [products, setProduct] = useState([]);
  const [price, setPrice] = useState(0);
  //!   get data from local storage
  useEffect(() => {
    const card = getFromStorageCart();
    setProduct(card);
  }, []);

  //! total price cal
  useEffect(() => {
    const totalPrice = products.reduce(
      (acc, product) => acc + (product.price || 0),
      0
    );
    setPrice(parseInt(totalPrice));
  }, [products]);

  //!   delate card
  const handleDeleteCard = (id) => {
    removeFromCart(id);
    const card = getFromStorageCart();
    setProduct(card);
  };
  //! modal show
  const handlePurchase = () => {
    const card = getFromStorageCart();
    if (card.length === 0)
      return toast.error("You haven not added any product!");
    else {
      document.getElementById("my_modal_1").showModal();
      localStorage.clear();
      const cheekCart = getFromStorageCart();
      setProduct(cheekCart);
    }
  };

  //!    sort by price
  console.log(products);
  const handleSort = () => {
    const sortCart = [...products].sort((a, b) => b.price - a.price);
    setProduct(sortCart);
  };

  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between items-center py-6">
        <h2 className="font-bold text-3xl md:text-neutral text-center md:py-0 pb-4">Carts</h2>
        <div className="flex items-center gap-5">
          <h1 className="font-bold md:text-2xl whitespace-nowrap text-lg">Total Price: ${price}</h1>
          <button
            onClick={handleSort}
            className="btn rounded-full border-[#9538E2] text-[#9538E2] bg-white font-bold max-w-fit"
          >
            Sort by Price
            <FaSortAmountDown></FaSortAmountDown>
          </button>
          <button
            onClick={() => {
              handlePurchase();
            }}
            className="btn rounded-full text-white bg-[#9538E2] font-bold max-w-fit md:mr-0 mr-3"
          >
            Purchase
          </button>
        </div>
      </div>
      {products.map((product) => (
        <Cart
          key={product.product_id}
          handleDeleteCard={handleDeleteCard}
          product={product}
        ></Cart>
      ))}

      {/* modal */}
      <div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box text-center">
            <img src="/assets/Group.png" alt="" className="mx-auto py-4" />
            <h3 className="font-bold text-lg">Payment Successfully</h3>
            <p className="py-4">Thank You for Purchasing</p>
            <div className="">
              <form method="dialog py-4">
                {/* if there is a button in form, it will close the modal */}
                <NavLink to='/' className="btn w-full">Close</NavLink>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default DashCart;
