import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import reducerExampleSlider from "./reducers/exampleReducer"
import headerReducer from "./reducers/header/headerReducer";
import rehearsalListReducer from "./reducers/rehearsal/list";
import rehearsalFormReducer from "./reducers/rehearsal/form";
import catalogReducer from "./reducers/catalog/catalog";
export const store = configureStore({
    reducer: {
        reducerExample: reducerExampleSlider,
        header: headerReducer,
        rehearsalList: rehearsalListReducer,
        rehearsalForm: rehearsalFormReducer, 
        catalog:catalogReducer

    },
    devTools: process.env.NODE_ENV !== "production",
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, any, Action<string>>;
export default store;
