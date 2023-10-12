import dayjs from "dayjs";
import { HttpMethod } from "../../../common/enums/metod";
import { httpData } from "../../../common/utils/http/httpMapin";
import { resetState, setRehearsalFormLoading } from "../../reducers/rehearsal/form";
import {
  setRehearsalList,
  setrehearsalListLoading,
} from "../../reducers/rehearsal/list";
import store, { AppThunk } from "../../store";
import axios from "axios";
import { FormatDate } from "../../../common/utils/date/dateFormat";
import { IRehearsalFormApi } from "../../../modelos/ensayos/IEnsayos";

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

        dispatch(setRehearsalList(res.data));
        return;
      })
      .catch((response) => {
        console.log(response)
      });
  } catch (error) {

  } finally {
    dispatch(setrehearsalListLoading(false));
  }
};







export const resetRehearsalForm = (): AppThunk => async (dispatch) => {
  dispatch(resetState());
};


export const postRehearsalForm = (): any => {
  return async (dispatch: any) => {

    try {
      const { form } = store.getState().rehearsalForm

      dispatch(setRehearsalFormLoading(true));
      await axios
        .post(apiUrl, httpData(HttpMethod.POST, { ...form, date: dayjs(form.date).format(FormatDate.DATE) }))
        .then((res) => {
          dispatch(fetchRehearsalList())
        })
      return true;
    } catch (error) {
      return false;
    } finally {
      dispatch(setRehearsalFormLoading(false));
    }
  }
}


export const removeRehearsal = (): any => {
  return async (dispatch: any) => {
    try {
      const { id } = store.getState().rehearsalForm.form

      dispatch(setRehearsalFormLoading(true));
     const response =  await axios
        .post(apiUrl, httpData(HttpMethod.DELETE, { id }))
        .then((res:any) => {  
          dispatch(fetchRehearsalList())
        });


      return response;
    } catch (error) {
      return false;
    } finally {
      dispatch(setRehearsalFormLoading(false));
    }
  }
}