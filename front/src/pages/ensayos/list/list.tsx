import { Button } from "@mui/material";
import { DataTable } from "../../../componets/list/list";
import { ListaEnsayosStyle } from "./listStyle.jss";
import { Buttons } from "../../../componets/buttons/button";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Rehearsal } from "./rehearsal/rehearsal";
import { IRehearsal } from "../../../modelos/ensayos/IEnsayos";
import { useEffect } from "react";
import { fetchEnsayosMedinaceli } from "../../../redux/actions/ensayo/ensayo";

export const ListaEnsayos = () => {
  const { loading, list } = useAppSelector((state) => state.listaEnsayos);
  const style = ListaEnsayosStyle();
  const dispatch = useAppDispatch();

  useEffect(() => {
    list === undefined && dispatch(fetchEnsayosMedinaceli());
  }, [list]);

  return (
    <div className={style.list}>
      {loading ? (
        <></>
      ) : (
        list?.map((item: IRehearsal) => {
          return <Rehearsal rehearsal={item} />;
        })
      )}
    </div>
  );
};
