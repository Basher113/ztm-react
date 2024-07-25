import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart } from '../../reducers/cart/cart.action';
import { selectCartItems } from '../../reducers/cart/cart.selector';

import Button from '../button/Button';
import './ProductsCard.styles.scss'

function ProductCard({ product }) {
    const { name, price, imageUrl } = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)

    const addItemToCartHandler = () => dispatch(addItemToCart(cartItems, product))


    return (
        <div className='product-card-container'>
            <img src={`${imageUrl}`} alt="" />
            <div className='footer'>
                <div className='name'>{name}</div>
                <div className="price">${price}</div>
            </div>
            <Button buttonType='inverted' onClick={addItemToCartHandler} >Add to cart</Button>
        </div>
    );
}

export default ProductCard;