import { Box, Typography, Button } from "@mui/material";
import { string } from "../assets/strings";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type Props = {
  page: number;
  hasMore: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const FooterRow = ({ page, setPage, hasMore }: Props) => {
  return (
    <Box style={styles.FooterWrapper}>
      <Button
        variant="contained"
        disabled={page === 1}
        onClick={() => {
          setPage((previousState: number) => previousState - 1);
        }}
        startIcon={<ArrowBackIosIcon />}
      >
        {string.PreviousPage}
      </Button>
      <Typography variant="h5" align="center" style={{ color: "#2F4F4F" }}>
        {`${string.Page} ${page}`}
      </Typography>
      <Button
        variant="contained"
        disabled={!hasMore}
        onClick={() => {
          setPage((previousState: number) => previousState + 1);
        }}
        endIcon={<ArrowForwardIosIcon />}
      >
        {string.NextPage}
      </Button>
    </Box>
  );
};

export default FooterRow;

const styles = {
  FooterWrapper: {
    flex: "1",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  } as const,
};
