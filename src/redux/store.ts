import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './slices/products';
import { IProducts } from '../const/mock';
import { numDisplayReducer } from './slices/numDisplay';

export interface IState {
    products: IProducts[];
    numDisplay: number;
}

const store = configureStore({
    reducer: {
        products: productsReducer,
        numDisplay: numDisplayReducer,
    },
    devTools: true,
});

export default store;
