import { CircularProgress, Grid } from "@material-ui/core";

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
