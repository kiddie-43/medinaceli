import { Icon } from "@mui/material";
import { ButtonColors, ButtonVariants } from "../../../../common/enums/buttons";
import { Buttons } from "../../../../componets/buttons/button";
import { IRehearsal } from "../../../../modelos/ensayos/IEnsayos";
import { RehearsalStyle } from "./rehearsalStyle.jss";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ScheduleIcon from "@mui/icons-material/Schedule";

import PersonIcon from "@mui/icons-material/Person";
import { useAppDispatch } from "../../../../redux/hooks";
import { removeRehearsal } from "../../../../redux/actions/rehearsal/rehearsal";
import { PopUpCodes } from "../../../../common/enums/popUpCodes";
import {
  setRehearsalFormshowpopUp,
  updateRehearsalForm,
} from "../../../../redux/reducers/rehearsal/form";
import { IGenericPayload } from "../../../../common/models/IGenericPayload";
import { generatePath, useNavigate } from "react-router-dom";
import { Routes } from "../../../../common/enums/routes";

interface IRehearsalProps {
  rehearsal: IRehearsal;
}

export const Rehearsal: React.FC<IRehearsalProps> = ({ rehearsal }) => {
  const style = RehearsalStyle();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div className={style.card}>
      <div className={style.content}>
        <div className={style.itemContent}>
          <div className={style.itemContentHeader}>
            <CalendarMonthIcon />
            Fecha
          </div>
          <div className={style.data}>{rehearsal.date}</div>
        </div>
        <div className={style.itemContent}>
          <div className={style.itemContentHeader}>
            <ScheduleIcon />
            Hora
          </div>
          <div
            className={style.data}
          >{`${rehearsal.startOn} - ${rehearsal.endOn}`}</div>
        </div>

        <div className={`${style.itemContent} ${style.assisted}`}>
          <div className={style.itemContentHeader}>
            <PersonIcon></PersonIcon>
          </div>
          <div className={style.data}>{rehearsal.assisted}</div>
        </div>

        <div className={`${style.itemContent} ${style.notAssisted}`}>
          <div className={style.itemContentHeader}>
            <PersonIcon></PersonIcon>
          </div>
          <div className={style.data}>{rehearsal.notAssisted}</div>
        </div>
      </div>

      <div className={style.actionsCard}>
        <Buttons
          label="Borrar"
          color={ButtonColors.ERROR}
          onClick={() => {
            dispatch(setRehearsalFormshowpopUp(PopUpCodes.REMOVE));
            const payload: IGenericPayload = {
              name: "id",
              value: rehearsal.id,
            };
            dispatch(updateRehearsalForm(payload));
          }}
        ></Buttons>

        <Buttons
          disabled={false}
          onClick={() => {
            let path = generatePath(Routes.ENSAYO, { id: String(rehearsal.id) });
            navigate(path);
          }}
          label={"Ver"}
          variant={ButtonVariants.CONTAINED}
        />
      </div>
    </div>
  );
};
