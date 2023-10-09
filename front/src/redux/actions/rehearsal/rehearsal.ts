import { HttpMethod } from "../../../common/enums/metod";
import { httpData } from "../../../common/utils/http/httpMapin";
import { resetState, setRehearsalFormLoading } from "../../reducers/rehearsal/form";
import {
  setRehearsalList,
  setrehearsalListLoading,
} from "../../reducers/rehearsal/list";
import store, { AppThunk } from "../../store";
import axios from "axios";

const apiUrl = `${process.env.REACT_APP_API_URL}/rehearsal/rehearsal.php`;

export const fetchRehearsalList = (): AppThunk => async (dispatch) => {
  try {
    let data = {
      value: "test",
    };
    dispatch(setrehearsalListLoading(true));
    await axios
      .post(apiUrl, httpData(HttpMethod.GET, data))
      .then((res) => {
        return JSON.parse(res.data);
      }).then((res) => {
        dispatch(setRehearsalList(res));
      })
      .catch((response) => {
        console.log(response)
      });
  } catch (error) {

  } finally {
    dispatch(setrehearsalListLoading(false));
  }
};

export const postRehearsalForm = (): AppThunk => async (dispatch) => {

  try {
    const { form } = store.getState().rehearsalForm

    let data = {
      form: form,
    };
    dispatch(setRehearsalFormLoading(true));
    await axios
      .post(apiUrl, httpData(HttpMethod.GET, data))
      .then((res) => {
        dispatch(setRehearsalList(res.data));
      })
      .catch((response) => {
      });

    dispatch(resetState());
  } catch (error) {

  } finally {
    dispatch(setRehearsalFormLoading(false));
  }
};


export const resetRehearsalForm = (): AppThunk => async (dispatch) => {
  dispatch(resetState());

};


