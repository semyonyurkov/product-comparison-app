import { createSlice } from '@reduxjs/toolkit';
import { CellType, products } from '../../const/mock';
import { IState } from '../store';
import { useSelector } from 'react-redux';

interface IRows {
    [key: string]: {
        type?: CellType;
        values: string[];
    };
}

const productsSlice = createSlice({
    name: 'products',
    initialState: products,
    reducers: {},
});

export const productsReducer = productsSlice.reducer;

export const selectProducts = (state: IState) => {
    const currentNumDisplay = state.numDisplay;
    return state.products.slice(0, currentNumDisplay);
};

export const selectProperties = (state: IState) => {
    const arrOfProperties = selectProducts(state).map((product) => {
        return product.properties;
    });

    const rows: IRows = {};
    arrOfProperties.forEach((properties) => {
        properties.forEach((property) => {
            if (!rows[property.title]) {
                rows[property.title] = { values: [] };
            }
            rows[property.title].type = property.type;
            if (property.title in rows) {
                rows[property.title].values.push(property.value);
            } else {
                rows[property.title].values = [property.value];
            }
        });
    });
    return rows;
};
