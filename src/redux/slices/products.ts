import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CellType, IProducts, products } from '../../const/mock';
import { IState } from '../store';

interface IRows {
    [key: string]: {
        type?: CellType;
        values: (string | boolean)[];
    };
}

const productsSlice = createSlice({
    name: 'products',
    initialState: products,
    reducers: {
        replaceProduct: (
            state: IProducts[],
            action: PayloadAction<{ replaceId: number; targetId: number }>
        ) => {
            const replaceIndex = state.findIndex(
                (product) => product.id === action.payload.replaceId
            );
            const targetIndex = state.findIndex(
                (product) => product.id === action.payload.targetId
            );

            [state[replaceIndex], state[targetIndex]] = [
                state[targetIndex],
                state[replaceIndex],
            ];
        },
    },
});

export const { replaceProduct } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;

export const selectProducts = (state: IState) => {
    const currentNumDisplay = state.numDisplay;
    return state.products.slice(0, currentNumDisplay);
};

export const selectOtherProducts = (state: IState) => {
    const currentNumDisplay = state.numDisplay;
    return state.products.slice(currentNumDisplay, state.products.length);
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
