import DirectoryItem from '../directory-item/DirectoryItem';
import './Directories.styles.scss';

import { useNavigate } from 'react-router';

const directories = [
    {
        "id": 1,
        "title": "hats",
        "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
        "path": "shop/hats"
    },
    {
        "id": 2,
        "title": "jackets",
        "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
        "path": "shop/jackets"
    },
    {
        "id": 3,
        "title": "sneakers",
        "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
        "path": "shop/sneakers"
    },
    {
        "id": 4,
        "title": "womens",
        "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
        "path": "shop/womens"
    },
    {
        "id": 5,
        "title": "mens",
        "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
        "path": "shop/mens"
    }
]

function Directories() {

    return (
        <div className="directories-container">
            {directories.map((directory) => {
                const { title, id, imageUrl, path } = directory
                return <DirectoryItem path={path} key={id} title={title} imageUrl={imageUrl} />
            })}
        </div>
    );
}

export default Directories;