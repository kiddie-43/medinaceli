import React, { useState } from "react";
import logo from "./logo.svg";
import { Buttons } from "./componets/buttons/button";
import { Header } from "./componets/header/header";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { RoutesApp } from "./routes/routes";
import {
  BottomHeader,
  IBottomHeaderItemProps,
} from "./componets/bottomNavBar/bottomNavBar";
import { AppStyle } from "./appStyle.jss";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Routes } from "./common/enums/routes";
import { useAppDispatch } from "./redux/hooks";
import { setHeaderName } from "./redux/reducers/header/headerReducer";
import { IGenericPayload } from "./common/models/IGenericPayload";

export const App = () => {
  const style = AppStyle();
  const [value, setValue] = useState<string>(Routes.ENSAYOS);
  const ButtonHeaderActions: IBottomHeaderItemProps[] = [
    {
      icon: <RestoreIcon />,
      label: "Ensayos",
      value: Routes.ENSAYOS,
    },
    {
      icon: <FavoriteIcon />,
      label: "Banda",
      value: Routes.BANDA,
    },
  ];

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className={style.appContainer}>
      <Header />
      <div className={style.main}>
        <RoutesApp />
      </div>

      <BottomHeader
        onChange={(event: any, value: any) => {
          const payload: IGenericPayload = {
            name: "",
            value: ButtonHeaderActions.find((item) => item.value === value)
              ?.label,
          };
          setValue(value);
          navigate(value);

          dispatch(setHeaderName(payload));
        }}
        value={value}
        options={ButtonHeaderActions}
      />
    </div>
  );
};
