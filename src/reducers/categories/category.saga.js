import { takeLatest, all, call, put, takeEvery, } from "redux-saga/effects";

import { fetchCategoriesSuccess, fetchCategoriesFailed } from "./category.action";
import { CATEGORIES_TYPES } from "./category.types";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";


export function* fetchCategories() {
    try {
        const categories = yield call(getCategoriesAndDocuments); // to get the value of this getCategoriesAndDocuments we have to use the "call"
        yield put(fetchCategoriesSuccess(categories))
    } catch (error) {
        yield put(fetchCategoriesFailed(error)) // put is dispatch of generator function
    }
}

export function* watchFetchCategories() {
    yield takeEvery(CATEGORIES_TYPES.FETCH_CATEGORIES_START, fetchCategories)
    // Whenever we take tha latest FETCH_CATEGORIES_START action, initialize the fetchCategoriesAsync saga
}

export function* categoriesSaga() {
    yield all([call(watchFetchCategories)]) // Hey run everything inside and only complete when everything is done.
}
