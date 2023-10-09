import dayjs from "dayjs";
import { DatePickerSelector } from "../../../../componets/datePicker/datePicker";
import { RehearsalFormStyle } from "./formStyle.jss";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { TimerPicker } from "../../../../componets/timePicker/timePicker";
import { IGenericPayload } from "../../../../common/models/IGenericPayload";
import { updateRehearsalForm } from "../../../../redux/reducers/rehearsal/form";
import { MusicianSelectorChip } from "../../../../componets/selector/controller/musicianSelector";
import { useEffect } from "react";

const filterIfNotAsisted = (assisted: string[], notAssisted: string[]) => {
  const noAsistenciasSet = new Set(notAssisted.map((usuario) => usuario));
  const asistenciasFiltradas = assisted.filter(
    (usuario) => !noAsistenciasSet.has(usuario)
  );

  return asistenciasFiltradas;
};

const filterIfAsisted = (assisted: string[], notAssisted: string[]) => {
  const AsistenciasSet = new Set(assisted.map((usuario) => usuario));
  const asistenciasFiltradas = notAssisted.filter(
    (usuario) => !AsistenciasSet.has(usuario)
  );

  return asistenciasFiltradas;
};

export const RehearsalForm = () => {
  const style = RehearsalFormStyle();
  const { date, startOn, endOn, assisted, notAsisted } = useAppSelector(
    (state) => state.rehearsalForm.form
  );
  const dispatch = useAppDispatch();
  const onUpdateProperty = (value: any, name: string) => {
    const payload: IGenericPayload = {
      name,
      value,
    };
    dispatch(updateRehearsalForm(payload));
  };
  return (
    <div className={style.form}>
      <div className={style.rowForm}>
        <DatePickerSelector
          value={date}
          label={"Fecha ensayo"}
          onChange={onUpdateProperty}
          name={"date"}
        />
      </div>

      <div className={style.rowForm}>
        <TimerPicker
          label={"Hora incio"}
          onChange={onUpdateProperty}
          name={"startOn"}
          value={startOn}
        />

        <TimerPicker
          label={"Hora fin"}
          onChange={onUpdateProperty}
          name={"endOn"}
          value={endOn}
          minTime={dayjs(startOn)}
        />
      </div>
      <div className={style.rowForm}>
        <MusicianSelectorChip
          selectedOptions={assisted}
          label={"Asistidos"}
          name={"assisted"}
          onChange={(value: string[], name: string) => {
            const payload: IGenericPayload = {
              name,
              value,
            };

            dispatch(updateRehearsalForm(payload));

            dispatch(
              updateRehearsalForm({
                name: "notAsisted",
                value: filterIfAsisted(value, notAsisted),
              })
            );
          }}
        />
      </div>

      <div className={style.rowForm}>
        <MusicianSelectorChip
          selectedOptions={notAsisted}
          label={"No asistidos"}
          name={"notAsisted"}
          onChange={(value: string[], name: string) => {
            const payload: IGenericPayload = {
              name,
              value: value,
            };
            dispatch(updateRehearsalForm(payload));
            console.log(filterIfNotAsisted(assisted, value));
            dispatch(
              updateRehearsalForm({
                name: "assisted",
                value: filterIfNotAsisted(assisted, value),
              })
            );
          }}
        />
      </div>
    </div>
  );
};
