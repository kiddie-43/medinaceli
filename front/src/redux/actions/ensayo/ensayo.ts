import { setListaEnsayosLoading } from "../../reducers/ensayos/list";
import { AppThunk } from "../../store";

export const fetchEnsayosMedinaceli = (): AppThunk => async (dispatch) => {
    try {

        dispatch(setListaEnsayosLoading(true));
        await fetch('https://api.github.com/users/workshopsjsmvd')
            .then(res => {
                return res.json();
            })
            .then(res => {

            });

    } catch (error) {
        console.log(error);
    } finally {
        dispatch(setListaEnsayosLoading(false));

    }
};