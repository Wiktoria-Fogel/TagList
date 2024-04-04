import { Box, Typography, CircularProgress } from "@mui/material";
import { string } from "../assets/strings";

const LoadingComponent = () => {
  return (
    <Box style={styles.LoadingWrapper}>
      <CircularProgress color="inherit" />
      <Typography variant="h3" align="center" style={styles.Label}>
        {string.Loading}
      </Typography>
    </Box>
  );
};

export default LoadingComponent;

const styles = {
  LoadingWrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "16px",
    marginTop: "100px",
  } as const,
  Label: {
    color: "#2F4F4F",
    marginLeft: "16px",
  },
};
