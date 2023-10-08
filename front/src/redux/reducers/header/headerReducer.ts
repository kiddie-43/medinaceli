import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { stat } from 'fs';
import { IGenericPayload } from '../../../common/models/IGenericPayload';

interface IHeaderReducerState {
    headerName: string;
}

const initialState: IHeaderReducerState = {
    headerName: "Banda cristo medinaceli"
};

const headerReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {

        resetState: (state) => {
            state = initialState;
        },
        setHeaderName: (state, action: PayloadAction<IGenericPayload>) => {
            state.headerName = action.payload.value
        },
    }
});

export const { setHeaderName } = headerReducer.actions;

export default headerReducer.reducer;