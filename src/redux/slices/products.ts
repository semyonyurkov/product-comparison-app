import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../const/mock';
import { IState } from '../store';

const productsSlice = createSlice({
    name: 'products',
    initialState: products,
    reducers: {
        // addProducts: (_, action) => action.payload,
    },
});

// export const { addProducts } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;

export const selectProducts = (state: IState) => {
    return state.products;
};
