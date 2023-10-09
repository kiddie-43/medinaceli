import { Button, LinearProgress } from "@mui/material";
import { DataTable } from "../../../componets/list/list";
import { ListaEnsayosStyle } from "./listStyle.jss";
import { Buttons } from "../../../componets/buttons/button";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Rehearsal } from "./rehearsal/rehearsal";
import { IRehearsal } from "../../../modelos/ensayos/IEnsayos";
import { useEffect } from "react";
import { fetchRehearsalList } from "../../../redux/actions/rehearsal/rehearsal";
import { ButtonVariants } from "../../../common/enums/buttons";
import { Skeleton } from "../../../componets/skeleton/skeleton";

export const ListaEnsayos = () => {
  const { loading, list } = useAppSelector((state) => state.rehearsalList);
  const style = ListaEnsayosStyle();
  const dispatch = useAppDispatch();

  useEffect(() => {
    list === undefined && dispatch(fetchRehearsalList());
  }, [list]);

  return (
    <div className={style.list}>
      {loading ? (
        <Skeleton />
      ) : (
        list &&
        list?.map((item: IRehearsal) => {
          return <Rehearsal rehearsal={item} />;
        })
      )}

      <Buttons
        variant={ButtonVariants.CONTAINED}
        label="buscar"
        onClick={() => {
          dispatch(fetchRehearsalList());
        }}
      ></Buttons>
    </div>
  );
};
