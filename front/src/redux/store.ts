import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import reducerExampleSlider from "./reducers/exampleReducer"
import headerReducer from "./reducers/header/headerReducer";
import listaEnsayosReducer from "./reducers/ensayos/list";
export const store = configureStore({
    reducer: {
        reducerExample: reducerExampleSlider,
        header: headerReducer,
        listaEnsayos: listaEnsayosReducer

    },
    devTools: process.env.NODE_ENV !== "production",
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, any, Action<string>>;
export default store;
