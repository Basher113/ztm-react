import Category from "./Category";
import './Categories.styles.scss'
function Categories({ categories }) {
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <Category key={category.id} title={category.title} imageUrl={category.imageUrl} />
            ))}
        </div>
    );
}

export default Categories;