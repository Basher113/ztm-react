import { useParams } from "react-router";
import { useContext, useState, useEffect } from "react";
import { CategoriesMapContext } from "../../contexts/CategoriesMapContext";
import ProductCard from "../../components/product-card/ProductsCard";
import './Category.styles.scss'

function Category() {
    const { categoriesMap } = useContext(CategoriesMapContext);
    const { category } = useParams();
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <>

            {products && (
                <div className="category-container">
                    <h2>
                        <span className='category'>{category}</span>
                    </h2>
                    <div className='products'>
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            )}

        </>
    );
}

export default Category;