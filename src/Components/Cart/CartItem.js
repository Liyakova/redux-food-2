import { useDispatch } from "react-redux";
import dataDishes from "../../data/dataDishes";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {
    console.log(cartItem);
    const dishes = dataDishes.find(item => item.id === cartItem.dishId);
    const dispatch = useDispatch();
    console.log(dishes)
    return(
        <div className="dishInCart">
            <p className="pCart">{dishes.name} - {cartItem.quantity} portion(s)</p>
            <p className="pCart">Price: $ {dishes.price * cartItem.quantity}</p>
            <span onClick={()=> dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                ❎
            </span>
        </div>
    )
}

export default CartItem;