import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import reducerExampleSlider from "./reducers/exampleReducer"
import { type } from "os";
export const store = configureStore({
    reducer: {
        reducerExample: reducerExampleSlider
    },
    devTools: process.env.NODE_ENV !== "production",
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, any, Action<string>>;
export default store;
