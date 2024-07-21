import './CheckoutItem.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

function CheckoutItem({ cartItem }) {
    const { name, quantity, price, imageUrl } = cartItem;
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

    const addItemToCartHandler = () => addItemToCart(cartItem)
    const removeItemFromCartHandler = () => removeItemFromCart(cartItem)
    const clearCartItemFromCartHandler = () => clearItemFromCart(cartItem)
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
            <span className='remove-button' onClick={clearCartItemFromCartHandler} >
                &#10005;
            </span>
        </div>
    );
}

export default CheckoutItem;