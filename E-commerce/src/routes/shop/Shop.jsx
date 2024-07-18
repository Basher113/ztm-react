import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import ProductCard from "../../components/product-card/ProductsCard";
import './Shop.styles.scss'
function Shop() {
    const { products } = useContext(ProductContext);
    console.log(products, 'products')
    return (
        <div className="products-container">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default Shop;