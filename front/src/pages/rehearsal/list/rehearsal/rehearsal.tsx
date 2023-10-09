import { Icon } from "@mui/material";
import { ButtonVariants } from "../../../../common/enums/buttons";
import { Buttons } from "../../../../componets/buttons/button";
import { IRehearsal } from "../../../../modelos/ensayos/IEnsayos";
import { RehearsalStyle } from "./rehearsalStyle.jss";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ScheduleIcon from "@mui/icons-material/Schedule";

import PersonIcon from "@mui/icons-material/Person";

interface IRehearsalProps {
  rehearsal: IRehearsal;
}

export const Rehearsal: React.FC<IRehearsalProps> = ({ rehearsal }) => {
  const style = RehearsalStyle();

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
          disabled={false}
          onClick={(value?: any) => {
          }}
          label={"Ver"}
          variant={ButtonVariants.CONTAINED}
        />
      </div>
    </div>
  );
};
