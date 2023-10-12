import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Modal,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Buttons } from "../buttons/button";
import { PopUpStyle } from "./popUpStyle.jss";
import { PopUpTypes } from "../../common/enums/popUpTypes";
import { useMemo } from "react";
import { ButtonColors, ButtonVariants } from "../../common/enums/buttons";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";
interface IPopUpConfirmationProps {
  showPopUp: boolean;
  onSave: () => void;
  onCancel: () => void;
  component: any;
  title: string;
  disabled: boolean;
  typePopUp?: PopUpTypes;
  loading:boolean;
}
const dataPopUp = [
  {
    type: PopUpTypes.ELIMINAR,
    button: ButtonColors.ERROR,
    icon: (
      <DeleteIcon
        sx={{ fontSize: "calc(10rem - 5px )" }}
        color={ButtonColors.ERROR}
      ></DeleteIcon>
    ),
    message:
      "Estás a punto de eliminar un elemento. Por favor, confirma tu elección antes de proceder.",
    buttonMessage: "Eliminar",
  },

  {
    type: PopUpTypes.INFORMACION,
    button: ButtonColors.SECONDARY,
    icon: (
      <InfoIcon
        sx={{ fontSize: "calc(10rem - 5px )" }}
        color={ButtonColors.INFO}
      />
    ),
    message: "",
    buttonMessage: "Aceptar",
  },
  {
    type: PopUpTypes.ACEPTAR,
    button: ButtonColors.PRIMARY,
    icon: (
      <CheckCircleIcon
        sx={{ fontSize: "calc(10rem - 5px )" }}
        color={ButtonColors.PRIMARY}
      />
    ),
    message: "",
    buttonMessage: "Aceptar",
  },
  {
    type: PopUpTypes.WARNING,
    button: ButtonColors.WARNING,
    icon: (
      <WarningIcon
        sx={{ fontSize: "calc(10rem - 5px )" }}
        color={ButtonColors.WARNING}
      />
    ),
    message: "",
    buttonMessage: "Aceptar",
  },
];

export const PopUpConfirmation: React.FC<IPopUpConfirmationProps> = ({
  showPopUp,
  onCancel,
  onSave,
  component,
  title,
  disabled,
  typePopUp,
  loading
}) => {
  const style = PopUpStyle();

  const container = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    heigth: "80%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const styles = useMemo(() => {
    if (!typePopUp) {
      return dataPopUp.find((item) => item.type === PopUpTypes.INFORMACION);
    }

    return dataPopUp.find((item) => item.type === typePopUp);
  }, [typePopUp]);

  return (
    <Modal
      open={showPopUp}
      onClose={onCancel}
      aria-labelledby="popup-title"
      aria-describedby="popup-description"
    >
      <Box sx={container}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: 10,
            left: 10,
            fontWeight: "bolder",
          }}
        >
          {title}
        </Box>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onCancel}
          aria-label="close"
          sx={{ position: "absolute", top: 0, right: 10 }}
        >
          <CloseIcon />
        </IconButton>
        <div className={style.popUpConfirmationContent}>
          {styles?.icon} {styles?.message}
        </div>
        <div className={style.actions}>
          <Buttons
            label="Cerrar"
            variant={ButtonVariants.OUTLINED}
            onClick={onCancel}
            disabled={loading}

          />
          <Buttons
            disabled={loading}
            color={styles?.button}
            label={styles?.buttonMessage ?? "Aceptar"}
            onClick={onSave}

          />
        </div>
      </Box>
    </Modal>
  );
};
