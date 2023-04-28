import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const numDisplaySlice = createSlice({
    name: 'numDisplay',
    initialState: 3,
    reducers: {
        setNumber: (state, action: PayloadAction<number>) => {
            state = action.payload;
            return state;
        },
    },
});

export const { setNumber } = numDisplaySlice.actions;
export const numDisplayReducer = numDisplaySlice.reducer;
