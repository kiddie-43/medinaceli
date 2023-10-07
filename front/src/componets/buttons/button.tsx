import { Button } from "@mui/material"

interface IButtonsProps {
    disabled: boolean;
    onClick: (value?: any) => void;
    label: string;
}


export const Buttons: React.FC<IButtonsProps> = ({ disabled, onClick, label }) => {


    return <><Button
        onClick={onClick}
        disabled={disabled}
    >
        {label}
    </Button></>
}