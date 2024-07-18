import { useContext } from 'react'
import { CartDropDownContext } from '../../contexts/CartDropdownContext'

import './CartIcon.styles.scss'
import ShoppingIcon from '../../assets/shopping-bag.svg?component'


function CartIcon() {
    const { cartDropDownIsVisible, setCartDropDownIsVisible } = useContext(CartDropDownContext)
    const cartDropDownHandler = () => setCartDropDownIsVisible(!cartDropDownIsVisible)

    return (
        <div className='cart-icon-container' onClick={cartDropDownHandler}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    );
}

export default CartIcon;