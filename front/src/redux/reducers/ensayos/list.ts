import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IRehearsal } from '../../../modelos/ensayos/IEnsayos';

interface IListaEnsayosState {
    list?: IRehearsal[];
    loading: boolean;
}

const initialState: IListaEnsayosState = {
    loading: false,
    list: [
        {
            assisted: ["5"],
            date: "08/10/2023",
            endOn: "20:00",
            id: 1,
            notAssisted: ["5"],
            startOn: "19:00"

        }

    ]
};

const listaEnsayosReducer = createSlice({
    name: 'listaEnsayosReducer',
    initialState,
    reducers: {

        resetState: (state) => {
            state = initialState;
        },
        setListaEnsayos: (state, action: PayloadAction<any[]>) => {
            state.list = action.payload
        },
        setListaEnsayosLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
    }
});

export const { resetState, setListaEnsayos, setListaEnsayosLoading } = listaEnsayosReducer.actions;

export default listaEnsayosReducer.reducer;