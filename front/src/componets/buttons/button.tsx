import { Button } from "@mui/material";
import { ButtonColors, ButtonVariants } from "../../common/enums/buttons";

interface IButtonsProps {
  disabled?: boolean;
  onClick: (value?: any) => void;
  label: string;
  variant?: ButtonVariants;
  color?: ButtonColors;
}

export const Buttons: React.FC<IButtonsProps> = ({
  disabled,
  onClick,
  label,
  color,
  variant,
}) => {
  return (
    <>
      <Button
        onClick={onClick}
        disabled={disabled}
        color={color}
        variant={variant ?? ButtonVariants.CONTAINED}
      >
        {label}
      </Button>
    </>
  );
};
