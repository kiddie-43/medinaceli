import { setListaEnsayos, setListaEnsayosLoading } from "../../reducers/ensayos/list";
import { AppThunk } from "../../store";

export const fetchEnsayosMedinaceli = (): AppThunk => async (dispatch) => {
    try {

        dispatch(setListaEnsayosLoading(true));
        await fetch('http://localhost/medinaceli/back/ensayos/obtenerEnsayos.php')
            .then(res => {
                return res.json();
            })
            .then(res => {
                dispatch(setListaEnsayos(res));

                console.log(res)
            });

    } catch (error) {
        console.log(error);
    } finally {
        dispatch(setListaEnsayosLoading(false));

    }
};