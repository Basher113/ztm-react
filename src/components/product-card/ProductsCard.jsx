import Button from '../button/Button';
import './ProductsCard.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';


function ProductCard({ product }) {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addItemToCartHandler = () => {
        console.log('hello?')
        return addItemToCart(product)
    }

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