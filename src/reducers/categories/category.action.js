import { CATEGORIES_TYPES } from "./category.types"
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const setCategories = (categories) => ({ type: CATEGORIES_TYPES.SET_CATEGORIES, payload: categories })

export const fetchCategoriesStart = () => ({ type: CATEGORIES_TYPES.FETCH_CATEGORIES_START });
export const fetchCategoriesSuccess = (categories) => ({ type: CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS, payload: categories });
export const fetchCategoriesFailed = (error) => ({ type: CATEGORIES_TYPES.FETCH_CATEGORIES_FAILED, payload: error });

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());

    try {
        const categories = await getCategoriesAndDocuments();
        dispatch(fetchCategoriesSuccess(categories))
    } catch (error) {
        dispatch(fetchCategoriesFailed(error))
    }
}
