import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

function Loading() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <CircularProgress />
    </Grid>
  );
}

export default Loading;
