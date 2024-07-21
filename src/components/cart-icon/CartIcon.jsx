import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import './CartIcon.styles.scss'
import ShoppingIcon from '../../assets/shopping-bag.svg?component'


function CartIcon() {
    const { cartDropDownIsVisible, setCartDropDownIsVisible, cartCount } = useContext(CartContext)
    const cartDropDownHandler = () => setCartDropDownIsVisible(!cartDropDownIsVisible)

    return (
        <div className='cart-icon-container' onClick={cartDropDownHandler}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    );
}

export default CartIcon;