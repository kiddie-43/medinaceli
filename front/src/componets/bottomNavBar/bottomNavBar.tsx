import { BottomNavigation, BottomNavigationAction } from "@mui/material";

import { useState } from "react";
import { BotomHeaderStyle } from "./bottomNavBarStyle.jss";
import { useNavigate } from "react-router-dom";
import { RoutesApp } from "../../routes/routes";
import { Routes } from "../../common/enums/routes";
interface IBottomHeaderProps {
    onChange: (event: any, value: any) => any;
    value: any;
    options: IBottomHeaderItemProps[]
}

export interface IBottomHeaderItemProps {
    value: string;
    label: string;
    icon: React.ReactNode
}
export const BottomHeader: React.FC<IBottomHeaderProps> = ({ onChange, value, options }) => {

    const style = BotomHeaderStyle();
    return <div className={style.container}>


        <BottomNavigation
            showLabels
            value={value}
            onChange={onChange}
        >
            {options.map(item => {
                return <BottomNavigationAction value={item.value} label={item.label} icon={item.icon} />
            })}



        </BottomNavigation>
    </div>
}