import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionItems = createSelector(
    [selectShopCollection],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollectionCategoryItems = catParam => createSelector(
    [selectShopCollection],
    collections => collections[catParam]
);