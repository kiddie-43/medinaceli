import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IRehearsal, IRehearsalForm } from '../../../modelos/ensayos/IEnsayos';
import { PopUpCodes } from '../../../common/enums/popUpCodes';
import { IGenericPayload } from '../../../common/models/IGenericPayload';



interface IRehearsalFormState {
    form: IRehearsalForm;
    loading: boolean;
    showPopUp: PopUpCodes;
}

const initialState: IRehearsalFormState = {
    loading: false,
    showPopUp: PopUpCodes.NONE,
    form: {
        date: new Date(),
        endOn: "",
        startOn: "",
        assisted: [],
        notAsisted: []

    }
};

const rehearsalFormReducer = createSlice({
    name: 'rehearsalFormReducer',
    initialState,
    reducers: {

        resetState: (state) => {
            state.form = initialState.form;
            state.showPopUp = initialState.showPopUp
        },
        setRehearsalForm: (state, action: PayloadAction<any>) => {
            state.form = action.payload
        },
        setRehearsalFormLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        setRehearsalFormshowpopUp: (state, action: PayloadAction<PopUpCodes>) => {
            state.showPopUp = action.payload
        },
        updateRehearsalForm: (state, action: PayloadAction<IGenericPayload>) => {
            state.form = {
                ...state.form,
                [action.payload.name]: action.payload.value

            }
        },
    }
});

export const { resetState, setRehearsalForm, setRehearsalFormLoading, setRehearsalFormshowpopUp, updateRehearsalForm } = rehearsalFormReducer.actions;

export default rehearsalFormReducer.reducer;