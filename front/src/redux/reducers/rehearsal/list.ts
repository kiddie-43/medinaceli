import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IRehearsal } from '../../../modelos/ensayos/IEnsayos';

interface IRehearsalListState {
    list?: IRehearsal[];
    loading: boolean;
}

const initialState: IRehearsalListState = {
    loading: false,

};

const rehearsalListReducer = createSlice({
    name: 'rehearsalListReducer',
    initialState,
    reducers: {

        resetState: (state) => {
            state = initialState;
        },
        setRehearsalList: (state, action: PayloadAction<any[]>) => {
            state.list = action.payload
        },
        setrehearsalListLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
    }
});

export const { resetState, setRehearsalList, setrehearsalListLoading } = rehearsalListReducer.actions;

export default rehearsalListReducer.reducer;