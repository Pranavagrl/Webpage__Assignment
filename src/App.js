import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import { Box, Stack } from "@mui/material";

function App() {
  return (
    <Box
      color={"text.primary"}
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <Sidebar />
        <Feed />
      </Stack>
    </Box>
  );
}

export default App;
