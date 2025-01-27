/* eslint-disable react/prop-types */
import { RxCross1 } from "react-icons/rx";
const Wishproduct = ({product, handleDeleteWish}) => {
    const {product_id, product_image, product_title, description, price}= product;
    return (
        <div className="relative flex items-center gap-8 border border-gray-500 rounded-xl mb-8">
            <div className="p-2">
                <img src={product_image} alt="" className="md:w-44 w-60 md:h-52 h-26 md:p-4 p-2 md:ml-0 ml-2"/>
            </div>
            <div className="md:space-y-4 space-y-2 mb:pb-0 pb-8">
                <h2 className="font-bold text-xl md:pt-0 pt-14">{product_title}</h2>
                <p className="text-base">{description}</p>
                <h2 className="font-bold">Price: ${price}</h2>
            </div>
            <div onClick={()=>{handleDeleteWish(product_id)}} className="btn absolute top-1 right-2 rounded-full border-error">
            <RxCross1  className=" text-xl text-error font-extrabold"/>
            </div>
        </div> 
    );
};

export default Wishproduct;