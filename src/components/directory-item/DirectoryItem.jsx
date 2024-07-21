import './DirectoryItem.styles.scss'
import { useNavigate } from 'react-router';
function DirectoryItem({ imageUrl, title, path }) {
    const navigate = useNavigate();
    const navigateHandler = (path) => navigate(path);
    return (
        <div className="directory-item-container" onClick={() => navigateHandler(path)}>
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