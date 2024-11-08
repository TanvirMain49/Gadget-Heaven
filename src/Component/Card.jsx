import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ Product }) => {
  const { product_title, price, product_id, product_image } = Product;
  const navigate = useNavigate();

  return (
    <div className="card bg-base-100 max-w-80 md:mx-0 mx-auto shadow-xl">
      <figure className="h-[70%]">
        <img src={product_image} alt="Shoes" className="p-6" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p className="font-bold">Price: ${price}</p>
        <div className="">
          <button
            onClick={() => navigate(`/card-Details/${product_id}`)}
            className="btn rounded-full px-8 text-lg bg-[#9538E2] text-white hover hover:bg-black hover:text-white hover:font-bold hover:scale-105 transition-all ease-in-out duration-200"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
