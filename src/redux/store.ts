import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './slices/products';
import { IProducts } from '../const/mock';

export interface IState {
    products: IProducts[];
}

const store = configureStore({
    reducer: {
        products: productsReducer,
    },
    devTools: true,
});

export default store;
