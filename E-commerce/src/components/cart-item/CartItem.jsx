import './CartItem.styles.scss'
function CartItem({ product }) {
    return (
        <div className='cart-item-container'>
            <img src={product.imageUrl} alt="" />

            <div className='item-detail'>
                <div className='name'>{product.name}</div>
                <span className='price'>{product.quantity} x ${product.price}</span>
            </div>

        </div>
    );
}

export default CartItem;