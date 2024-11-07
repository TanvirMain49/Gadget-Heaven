/* eslint-disable react/prop-types */
import { RxCross1 } from "react-icons/rx";
const Cart = ({product, handleDeleteCard}) => {
    const {product_id, product_image, product_title, description, price}= product;
    return (
        <div className="relative flex items-center gap-8 border border-gray-500 rounded-xl mb-8">
            <div className="p-2">
                <img src={product_image} alt="" className="w-44 h-52 p-4"/>
            </div>
            <div className="space-y-4">
                <h2 className="font-bold text-xl">{product_title}</h2>\
                <p className="text-base">{description}</p>
                <h2 className="font-bold">Price: ${price}</h2>
            </div>
            <div onClick={()=>{handleDeleteCard(product_id)}} className="btn absolute top-1 right-2 rounded-full border-error">
            <RxCross1  className=" text-xl text-error font-extrabold"/>
            </div>
        </div> 
    );
};

export default Cart;