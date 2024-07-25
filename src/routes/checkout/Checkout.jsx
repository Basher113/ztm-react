import './Checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../reducers/cart/cart.selector';

function Checkout() {
    const cartItems = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal)

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <span className='header-block'>Product</span>
                <span className='header-block'>Description</span>
                <span className='header-block'>Quantity</span>
                <span className='header-block'>Price</span>
                <span className='header-block'>Remove</span>
            </div>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className="total">Total: ${total}</div>
        </div>
    );
}

export default Checkout;