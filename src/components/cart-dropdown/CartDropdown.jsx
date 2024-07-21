import './CartDropdown.styles.scss'
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function CartDropDown() {
    const { cartItems } = useContext(CartContext)
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