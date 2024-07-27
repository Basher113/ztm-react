import { CATEGORIES_TYPES } from "./category.types"

export const setCategories = (categories) => ({ type: CATEGORIES_TYPES.SET_CATEGORIES, payload: categories })

export const fetchCategoriesStart = () => ({ type: CATEGORIES_TYPES.FETCH_CATEGORIES_START });
export const fetchCategoriesSuccess = (categories) => ({ type: CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS, payload: categories });
export const fetchCategoriesFailed = (error) => ({ type: CATEGORIES_TYPES.FETCH_CATEGORIES_FAILED, payload: error });