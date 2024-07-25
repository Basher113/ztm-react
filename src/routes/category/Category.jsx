import { useParams } from "react-router";
import { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { selectCategoriesMap, selectIsLoading } from "../../reducers/categories/category.selector";

import Spinner from "../../components/spinner/Spinner";
import ProductCard from "../../components/product-card/ProductsCard";

import './Category.styles.scss'

function Category() {
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectIsLoading);
    const { category } = useParams();
    const [products, setProducts] = useState(categoriesMap[category]);
    console.log(isLoading, 'loading')

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <div className="category-container">
            <h2 className='category'>
                <span>{category}</span>
            </h2>
            {isLoading && (<Spinner />)}
            {products && (
                <div className='products'>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}

        </div>
    );
}

export default Category;