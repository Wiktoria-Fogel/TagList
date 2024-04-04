import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { string } from "../assets/strings";
import ErrorIcon from "@mui/icons-material/Error";

type Props = {
  onClick: () => void;
};

const ErrorComponent = ({ onClick }: Props) => {
  return (
    <Box style={styles.ErrorWrapper}>
      <Box style={styles.LoadingWrapper}>
        <ErrorIcon fontSize="large" sx={{ color: "#B22222" }} />
        <Typography
          variant="h3"
          align="center"
          style={{ color: "#B22222", marginLeft: "16px" }}
        >
          {string.ErrorLabel}
        </Typography>
      </Box>
      <Button color="error" variant="contained" onClick={() => onClick()}>
        {string.TryAgain}
      </Button>
    </Box>
  );
};

export default ErrorComponent;

const styles = {
  ErrorWrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  } as const,
  LoadingWrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "16px",
    marginTop: "100px",
  } as const,
};
