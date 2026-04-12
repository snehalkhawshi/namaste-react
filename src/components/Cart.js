//  how to read card from store
//  subscribing the store
import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart?.items) || [];

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="text-center m-4 p-4 h-full">
            <h1 className="font-bold text-xl">Cart</h1>
            <div className="m-auto w-1/2">
                <button  className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear cart</button>
                {cartItems.length === 0 && (
                    <h1>Cart is empty. Add Items to card!</h1>
                )}
                <ItemsList list={cartItems}/>
            </div>

        </div>
    )
}

export default Cart;