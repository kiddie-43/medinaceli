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
import { ButtonVariants } from "../../common/enums/buttons";

interface IPopUpProps {
  showPopUp: boolean;
  onSave: () => void;
  onCancel: () => void;
  component: any;
  title: string;
  disabled: boolean;
}

export const PopUp: React.FC<IPopUpProps> = ({
  showPopUp,
  onCancel,
  onSave,
  component,
  title,
  disabled,
}) => {
  const style = PopUpStyle();

  const container = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    heigth: "80%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
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
        <div className={style.contenr}>{component}</div>
        <div className={style.actions}>
          <Buttons
            label="Cerrar"
            variant={ButtonVariants.OUTLINED}
            onClick={onCancel}
          />
          <Buttons disabled={disabled} label="Aceptar" onClick={onSave} />
        </div>
      </Box>
    </Modal>
  );
};
