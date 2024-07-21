import { createContext, useState, useEffect } from "react";
import { createCollectionAndDocuments, getCategoriesAndDocument } from "../utils/firebase/firebase.utils";
import SHOP_DATA from "../shop-data";

export const CategoriesMapContext = createContext({
    categoriesMap: {},
});

export const CategoriesMapProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = { categoriesMap };

    useEffect(() => {
        const getCategoryMap = async () => {
            const categoryMap = await getCategoriesAndDocument();
            setCategoriesMap(categoryMap)
        }
        getCategoryMap();
    }, [])


    return <CategoriesMapContext.Provider value={value}>{children}</CategoriesMapContext.Provider>
}

