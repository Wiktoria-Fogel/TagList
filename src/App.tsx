import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TagsList from "../src/screens/TagsList";
import { Box, Typography } from "@mui/material";
import { string } from "./assets/strings";
import { styles } from "./screens/styles";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Box style={styles.MainWrapper}>
        <Typography variant="h3" align="center" style={{ color: "#2F4F4F" }}>
          {string.MainTitle}
        </Typography>
        <TagsList />
      </Box>
    </QueryClientProvider>
  );
}

export default App;
