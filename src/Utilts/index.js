import toast from "react-hot-toast";

// get from local storage
const getFromStorageCart = () => {
    const all = localStorage.getItem('cart');
    if (all) {
        return JSON.parse(all);
    }
    else {
        return [];
    }
}
// add to local storage
const addCartToStorage = (product) => {
    const cart = getFromStorageCart();
    const exist = cart.find(item => item.product_id === product.product_id)
    if (exist) return toast.error('Product already added')
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart))
    toast.success('Add to cart')
}
// remove from local storage
const removeFromCart = (id) => {
    const cart = getFromStorageCart();
    const remaining = cart.filter(item => item.product_id != id);
    localStorage.setItem('cart', JSON.stringify(remaining))
    toast.success('Deleted cart');
    return;
}



const getCartFromWish = () => {
    const all = localStorage.getItem('wish-cart');
    if (all) {
        return JSON.parse(all);
    }
    else {
        return [];
    }
}

// add cart fro wishes
const addCartWhishes = (product) => {
    const wishCart = getCartFromWish();
    const exist = wishCart.find(item => item.product_id === product.product_id)
    if (exist) return toast.error('Product already added');
    wishCart.push(product);
    localStorage.setItem('wish-cart', JSON.stringify(wishCart))
    toast.success('Add to cart')
}

const removeWishCart = (id) => {
    const cart = getCartFromWish();
    const remaining = cart.filter(item => item.product_id != id);
    localStorage.setItem('wish-cart', JSON.stringify(remaining))
    toast.success('Deleted cart');
    return;
}

export { addCartToStorage, getFromStorageCart, addCartWhishes, getCartFromWish, removeFromCart, removeWishCart }