import { useMemo } from "react";
import { PopUpCodes } from "../../../common/enums/popUpCodes";
import { PopUp } from "../../../componets/popUp/popUp";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

import { RehearsalForm } from "./form/form";
import {
  postRehearsalForm,
  resetRehearsalForm,
} from "../../../redux/actions/rehearsal/rehearsal";

export const RehearsalFormContainer = () => {
  const { form, loading, showPopUp } = useAppSelector(
    (state) => state.rehearsalForm
  );
  const dispatch = useAppDispatch();

  const onCancel = () => {
    dispatch(resetRehearsalForm());
  };
  const onSave = () => {
    dispatch(postRehearsalForm());
  };
  const disabled = useMemo(() => {
    return !form.endOn || !form.startOn;
  }, [form]);
  const title = useMemo(() => {
    if (showPopUp === PopUpCodes.CREATE) {
      return "Añadir ensayo";
    } else if (showPopUp === PopUpCodes.UPDATE) {
    }

    return "";
  }, [showPopUp]);

  return (
    <PopUp
      showPopUp={showPopUp === PopUpCodes.CREATE}
      onSave={onSave}
      onCancel={onCancel}
      component={<RehearsalForm />}
      title={title}
      disabled={disabled}
    />
  );
};
