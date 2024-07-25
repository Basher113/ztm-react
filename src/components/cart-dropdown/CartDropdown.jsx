import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../../reducers/cart/cart.selector';

import Button from '../button/Button'
import CartItem from '../cart-item/CartItem';

import './CartDropdown.styles.scss'


function CartDropDown() {
    const cartItems = useSelector(selectCartItems)
    const navigate = useNavigate()
    const onClickHandler = () => {
        navigate('/checkout')
    }
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.length ? (cartItems && cartItems.map((item) => (
                    <CartItem key={item.id} product={item} />
                ))) : <span className='empty-message'>No items yet</span>}
            </div>


            <Button onClick={onClickHandler} >Go to Checkout</Button>
        </div>
    );
}

export default CartDropDown;