import { useSelector } from "react-redux";

import { selectCategoriesMap, selectIsLoading } from "../../reducers/categories/category.selector";

import Spinner from "../../components/spinner/Spinner";
import CategoryPreview from "../../components/category-preview/CategoryPreview";

function CategoriesPreview() {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsLoading);

    return (
        <>
            {isLoading ? <Spinner /> :
                Object.keys(categoriesMap).map((title) => (
                    <CategoryPreview key={title} title={title} products={categoriesMap[title]} />
                ))
            }
        </>

    );
}

export default CategoriesPreview;