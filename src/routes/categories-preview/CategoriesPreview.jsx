import { useContext } from "react";
import { CategoriesMapContext } from "../../contexts/CategoriesMapContext";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
function CategoriesPreview() {
    const { categoriesMap } = useContext(CategoriesMapContext);
    return (
        <>
            {
                Object.keys(categoriesMap).map((title) => (
                    <CategoryPreview key={title} title={title} products={categoriesMap[title]} />
                ))
            }
        </>

    );
}

export default CategoriesPreview;