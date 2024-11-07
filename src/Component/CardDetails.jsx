import { NavLink, useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { addCartToStorage, addCartWhishes } from "../Utilts";
import { RxCross1 } from "react-icons/rx";

const CardDetails = () => {
  const productData = useLoaderData();
  const { productId } = useParams();
  console.log(productId)
  const productDetails = productData.find(
    (data) => data.product_id === productId
  );
  const handleAddToCart = (productDetails) => {
    addCartToStorage(productDetails);
  };
  const handleWishCart = (productDetails) => {
    addCartWhishes(productDetails);
  };
  const {
    product_title,
    price,
    product_image,
    description,
    Specification,
    rating,
    availability,
  } = productDetails;
  const firstExample = {
    size: 20,
    value: rating,
    edit: false,
  };

  return (
    <div className="relative mb-96">
      <div className="bg-[#9538E2] rounded-xl min-h-80 pb-52">
        <div className="text-center text-white">
          <div className="">
            <h1 className="text-4xl font-bold px-24 pt-8">Product Details</h1>
            <p className="text-base py-6 px-60">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
      </div>
      {/* card section */}
      <div className="">
        <div className="absolute top-[50%] left-[10%] hero bg-base-200 max-w-[80%] mx-auto rounded-xl">
          <div className="hero-content gap-8 flex-col lg:flex-row">
            <img src={product_image} className="max-w-sm p-5 rounded-lg" />
            <div>
              <div className="relative">
                <h1 className="text-2xl font-bold pt-2">{product_title}</h1>
                <p className="py-2 text-lg font-semibold">Price:${price}</p>
                {availability ? (
                  <button className="rounded-full border border-green-600 bg-green-200 text-[#309C08] px-3 mt-3">
                    In stock
                  </button>
                ) : (
                  <button>Not in stock</button>
                )}
                <p className="text-base text-gray-500 py-3">{description}</p>
                <p className="font-bold pb-2">Specification: </p>
                <ol className="list-decimal pl-5 pb-3">
                  {Specification.map((spca, idx) => (
                    <li className="text-gray-500" key={idx}>
                      {spca}
                    </li>
                  ))}
                </ol>
                <p className="font-bold text-base">
                  Rating{" "}
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </p>
                <div className="flex gap-2 items-center">
                  <ReactStars {...firstExample} />
                  <p>{rating}</p>
                </div>
              </div>
              <div className="py-3 flex">
                <button
                  onClick={() => handleAddToCart(productDetails)}
                  className="btn mr-4 rounded-full bg-[#9538E2] text-white"
                >
                  Add To Card <CiShoppingCart className="text-2xl" />
                </button>

                <button
                  onClick={() => handleWishCart(productDetails)}
                  className="btn text-xl rounded-full text-black border-gray-500"
                >
                  <CiHeart></CiHeart>
                </button>

                <NavLink
                  to="/"
                  className="btn text-base absolute top-1 right-1 ml-4 rounded-full text-black border-gray-500"
                >
                  <RxCross1 className=" text-xl text-error font-extrabold" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
