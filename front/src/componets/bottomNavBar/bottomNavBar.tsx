import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from "react";
import { BotomHeaderStyle } from "./bottomNavBarStyle.jss";
export const BotomHeader = () => {
    const [value, setValue] = useState(0);
    const style = BotomHeaderStyle();

    return <div className={style.container}> <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
    >
        <BottomNavigationAction label="Banda" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Ensayos" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Perfil" disabled icon={<LocationOnIcon />} />
    </BottomNavigation>
    </div>
}