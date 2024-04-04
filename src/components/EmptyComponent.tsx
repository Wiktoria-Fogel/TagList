import { Box, Typography } from "@mui/material";
import { string } from "../assets/strings";

const EmptyComponent = () => {
  return (
    <Box style={styles.MainWrapper}>
      <Typography variant="h3" align="center" style={styles.Label}>
        {string.Empty}
      </Typography>
    </Box>
  );
};

export default EmptyComponent;

const styles = {
  MainWrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "150px",
    marginTop: "100px",
  } as const,
  Label: {
    color: "#2F4F4F",
    marginLeft: "16px",
  },
};
