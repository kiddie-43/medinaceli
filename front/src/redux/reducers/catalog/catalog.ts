import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { stat } from 'fs';
import { IGenericPayload } from '../../../common/models/IGenericPayload';
import { IMusician, IMusicianCatalog } from '../../../modelos/catalog/IMusician';

interface ICatalogState {
    musician: IMusicianCatalog;
}

const initialCatalogElement = {
    loading: false
}


const initialState: ICatalogState = {
    musician: initialCatalogElement
};

const catalogReducer = createSlice({
    name: 'catalogReducer',
    initialState,
    reducers: {

        resetState: (state) => {
            state = initialState;
        },
        setMusicianCatalogLoading: (state, action: PayloadAction<boolean>) => {
            state.musician.loading = action.payload
        },
        setMusicianCatalogData: (state, action: PayloadAction<IMusician[]>) => {
            state.musician.data = action.payload
        },

    }
});

export const {setMusicianCatalogData, setMusicianCatalogLoading } = catalogReducer.actions;

export default catalogReducer.reducer;