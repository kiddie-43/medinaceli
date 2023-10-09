
import { setMusicianCatalogLoading, setMusicianCatalogData } from "../../reducers/catalog/catalog";

import { AppThunk } from "../../store";
import axios from "axios";

const apiUrl = `${process.env.REACT_APP_API_URL}/catalog/musician.php`;

export const fetchMusiciansData = (): AppThunk => async (dispatch) => {
    try {

        dispatch(setMusicianCatalogLoading(true));
        await axios
            .get(apiUrl)
            .then((res) => {
                dispatch(setMusicianCatalogData(res.data));
            })
            .catch((response) => {
            });
    } catch (error) {
    } finally {
        dispatch(setMusicianCatalogLoading(false));
    }
};
