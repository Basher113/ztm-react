import { createSelector } from "reselect";
import { categoriesReducer } from "./category.reducer";

const categoriesReducerSelector = (state) => state.categories // This will run  


export const selectCategories = createSelector(
    // The only time where this will run is if this categoriesSlice object we get from the categoriesReducerSelector is different.
    [categoriesReducerSelector], // Check the categories state, if anything change from my previous output then re-run me
    (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
    [selectCategories], // as long as the categories state does not change do not re-run            just give me back previously calculated value;
    (categories) => categories.reduce((acc, category) => {  //<-------------------------This method                
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
    // Remember that this method will run once, but after that as long as it has not changed do not bother re-running me
)

export const selectIsLoading = createSelector(
    [categoriesReducerSelector],
    (categoriesSlice) => categoriesSlice.isLoading
)

