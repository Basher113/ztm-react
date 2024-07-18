import Button from '../button/Button';
import './ProductsCard.styles.scss'

function ProductCard({ product }) {
    const { name, price, imageUrl } = product

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt="" />
            <div className='footer'>
                <div className='name'>{name}</div>
                <div className="price">${price}</div>
            </div>
            <Button buttonType='inverted'>Add to cart</Button>
        </div>
    );
}

export default ProductCard;