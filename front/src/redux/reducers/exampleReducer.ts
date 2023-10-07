import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "vacio"
};

const useSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
    }
});

export const { setName } = useSlice.actions;

export default useSlice.reducer;