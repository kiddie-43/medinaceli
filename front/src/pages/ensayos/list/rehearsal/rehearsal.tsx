import { ButtonVariants } from "../../../../common/enums/buttons";
import { Buttons } from "../../../../componets/buttons/button";
import { IRehearsal } from "../../../../modelos/ensayos/IEnsayos";
import { RehearsalStyle } from "./rehearsalStyle.jss";
interface IRehearsalProps {
  rehearsal: IRehearsal;
}

export const Rehearsal: React.FC<IRehearsalProps> = ({ rehearsal }) => {
  const style = RehearsalStyle();

  return (
    <div className={style.card}>
      <div className={style.content}>
        <div className={style.itemContent}>
          <div>Fecha </div>
          <div>{rehearsal.date}</div>
        </div>
        <div className={style.itemContent}>
          <div>Hora</div>
          <div>{`${rehearsal.startOn} - ${rehearsal.endOn}`}</div>
        </div>

        <div className={style.itemContent}>
          <div>Asistidos </div>
          <div>{rehearsal.assisted}</div>
        </div>

        <div className={style.itemContent}>
          <div>Fallados </div>
          <div>{rehearsal.notAssisted}</div>
        </div>
      </div>

      <div className={style.actionsCard}>
        <Buttons
          disabled={false}
          onClick={(value?: any) => {
            console.log(rehearsal.id);
          }}
          label={"Ver"}
          variant={ButtonVariants.CONTAINED}
        />
      </div>
    </div>
  );
};
