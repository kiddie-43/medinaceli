import { Box, Fab } from "@mui/material";
import { ListaEnsayos } from "./list/list";
import AddIcon from "@mui/icons-material/Add";
import PullToRefresh from "react-pull-to-refresh";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchRehearsalList } from "../../redux/actions/rehearsal/rehearsal";
import { setrehearsalListLoading } from "../../redux/reducers/rehearsal/list";
import { RehearsalFormContainer } from "./controller/controller";
import { setRehearsalFormshowpopUp } from "../../redux/reducers/rehearsal/form";
import { PopUpCodes } from "../../common/enums/popUpCodes";

export const RehearsalContainer = () => {
  const { loading } = useAppSelector((state) => state.rehearsalList);
  const dispatch = useAppDispatch();
  const onRefresh = async (): Promise<void> => {
    dispatch(setrehearsalListLoading(true));
    setTimeout(() => {
      dispatch(fetchRehearsalList());
    }, 1000);
  };

  return (
    <>
      <PullToRefresh onRefresh={onRefresh} loading={loading}>
        <ListaEnsayos />
        <Box
          sx={{
            position: "fixed",
            bottom: "65px",
            right: "16px",
          }}
        >
          <Fab
            onClick={() => {
              dispatch(setRehearsalFormshowpopUp(PopUpCodes.CREATE));
            }}
            color="primary"
            aria-label="add"
          >
            <AddIcon />
          </Fab>
        </Box>
      </PullToRefresh>
      <RehearsalFormContainer />
    </>
  );
};
