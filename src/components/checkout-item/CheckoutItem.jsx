import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../reducers/cart/cart.action';
import { selectCartItems } from '../../reducers/cart/cart.selector';

import './CheckoutItem.styles.scss';
function CheckoutItem({ cartItem }) {
    const { name, quantity, price, imageUrl } = cartItem;
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const addItemToCartHandler = () => dispatch(addItemToCart(cartItems, cartItem))
    const removeItemFromCartHandler = () => dispatch(removeItemFromCart(cartItems, cartItem))
    const clearItemFromCartHandler = () => dispatch(clearItemFromCart(cartItems, cartItem))
    return (
        <div className='checkout-item-container'>
            <div className="image-container">
                <img src={imageUrl} alt="" />
            </div>
            <span className='name'> {name} </span>
            <span className='quantity'>
                <span className='arrow' onClick={removeItemFromCartHandler}>&#10094;</span>
                <span className='value'>{quantity}</span>
                <span className='arrow' onClick={addItemToCartHandler}>&#10095;</span>

            </span>
            <span className='price'>${price}</span>
            <span className='remove-button' onClick={clearItemFromCartHandler} >
                &#10005;
            </span>
        </div>
    );
}

export default CheckoutItem;