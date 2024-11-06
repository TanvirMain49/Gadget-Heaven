import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ Product }) => {
  const { product_title, price, product_id, product_image } = Product;
  const navigate = useNavigate();

  return (
    <div className="card bg-base-100 w-80 shadow-xl">
      <figure className="h-[70%]">
        <img src={product_image} alt="Shoes" className="p-6" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p className="font-bold">Price: ${price}</p>
        <div className="">
          <button
            onClick={() => navigate(`/card-Details/${product_id}`)}
            className="btn rounded-full px-8 text-lg bg-[#9538E2] text-white"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
