import './DirectoryItem.styles.scss'
import { useNavigate } from 'react-router';
function DirectoryItem({ imageUrl, title, path }) {
    const navigate = useNavigate();
    const navigateHandler = () => navigate(path);
    return (
        <div className="directory-item-container" onClick={navigateHandler}>
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className='directory-body-container'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
}

export default DirectoryItem;