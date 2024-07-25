import { useDispatch, useSelector } from 'react-redux';
import { setCartDropdownIsVisible } from '../../reducers/cart/cart.action';
import { selectCartDropdownIsVisible, selectCartCount } from '../../reducers/cart/cart.selector';

import './CartIcon.styles.scss';
import ShoppingIcon from '../../assets/shopping-bag.svg?component';


function CartIcon() {
    const dispatch = useDispatch();
    const cartDropdownIsVisible = useSelector(selectCartDropdownIsVisible)
    const cartCount = useSelector(selectCartCount)
    const cartDropDownIsVisibleHandler = () => dispatch(setCartDropdownIsVisible(!cartDropdownIsVisible))

    return (
        <div className='cart-icon-container' onClick={cartDropDownIsVisibleHandler}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    );
}

export default CartIcon;