import { Button } from "@mui/material";
import { ButtonVariants } from "../../common/enums/buttons";

interface IButtonsProps {
  disabled?: boolean;
  onClick: (value?: any) => void;
  label: string;
  variant?: ButtonVariants;
}

export const Buttons: React.FC<IButtonsProps> = ({
  disabled,
  onClick,
  label,
  variant,
}) => {
  return (
    <>
      <Button onClick={onClick} disabled={disabled} variant={variant ?? ButtonVariants.CONTAINED}>
        {label}
      </Button>
    </>
  );
};
