import { Box, CircularProgress, LinearProgress } from "@mui/material";

export const Skeleton = () => {
  return (
    <Box sx={{ width: "100%", height: "calc(90vh - 1erm)", display:"flex", justifyContent:"center", alignItems:"center" }}>
       <CircularProgress />
    </Box>
  );
};
