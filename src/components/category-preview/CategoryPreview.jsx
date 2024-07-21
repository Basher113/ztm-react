
import ProductCard from "../product-card/ProductsCard";
import { useNavigate } from "react-router";
import './CategoryPreview.styles.scss'

function CategoryPreview({ title, products }) {
    const navigate = useNavigate();

    const navigateHandler = (urlParam) => {
        navigate(urlParam)
    }
    return (
        <div className="category-preview-container">

            <h2>
                <span className='title' onClick={() => {
                    navigateHandler(title)
                }}>{title}</span>
            </h2>
            <div className="preview">

                {products.filter((_, index) => index < 4)
                    .map((product) => {
                        return <ProductCard key={product.id} product={product} />
                    })}
            </div>

        </div>
    );
}

export default CategoryPreview;