import { Routes, Route } from 'react-router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCategoriesStart } from '../../reducers/categories/category.action';

import CategoriesPreview from '../categories-preview/CategoriesPreview';
import Category from '../category/Category';
function Shop() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategoriesStart());
    }, [])

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path='/:category' element={<Category />} />
        </Routes>
    );
}

export default Shop;