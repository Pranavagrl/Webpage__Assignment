import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import {
  AccountBalanceWalletOutlined,
  ArrowDownward,
  ArrowUpward,
  AssignmentOutlined,
  LocalMallOutlined,
  MonetizationOnOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  FormControl,
  InputAdornment,
  InputBase,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { BarPlot, ChartContainer, PieChart } from "@mui/x-charts";
import colors from "../assets/colors";

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "5px",
  border: "1px solid #D3D3D3",
}));
const data = [{ value: 20 }, { value: 45 }, { value: 35 }];

const size = {
  width: 320,
  height: 250,
};

const StyledText = styled("text")(() => ({
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 40,
  fontWeight: 700,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();

  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}
const uData = [700, 600, 900, 750, 800, 500, 850, 1000, 950, 840, 780, 910];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
  "Page H",
  "Page I",
  "Page J",
  "Page K",
  "Page L",
];

function Feed() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box flex={1} p={2} >
      <Box
        marginLeft={"30px"}
        marginRight={"30px"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: 500 }}>Hey Pranav👋,</Typography>

        <InputBase
          placeholder="Search..."
          sx={{
            alignItems: "center",
            borderRadius: "5px",
            border: "1px solid #D3D3D3",
            backgroundColor: colors.white,
          }}
          startAdornment={
            <SearchIcon
              sx={{
                color: "#808080",
              }}
            />
          }
        />
      </Box>

      <Box
        margin="30px"
        display={{ md: "flex" }}
        justifyContent={"space-between"}
      >
        <Card sx={{ width: { md: 250, xs: 300 } }}>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                bgcolor: "#00FA9A",
                padding: "40px",
                marginRight: "10px",
              }}
              aria-label="recipe"
            >
              <MonetizationOnOutlined
                style={{
                  fontSize: "60px",
                }}
              />
            </Avatar>

            <Box>
              <Typography sx={{ fontSize: 10 }} color="text.secondary">
                Earning
              </Typography>
              <Typography variant="h6" component="div">
                $198K
              </Typography>
              <Typography
                sx={{ fontSize: 10, fontWeight: 700 }}
                color="text.secondary"
              >
                <ArrowUpward style={{ fontSize: 10, color: "#32CD32" }} />
                <span style={{ color: "#32CD32" }}>37.8%</span> this month
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Card sx={{ width: { md: 250, xs: 300 } }}>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ bgcolor: "#B0E0E6", padding: "40px", marginRight: "10px" }}
              aria-label="recipe"
            >
              <AssignmentOutlined
                style={{
                  fontWeight: 700,
                  fontSize: "50px",
                }}
              />
            </Avatar>
            <Box>
              <Typography sx={{ fontSize: 10 }} color="text.secondary">
                Order
              </Typography>
              <Typography variant="h6" component="div">
                $2.4k
              </Typography>
              <Typography
                sx={{ fontSize: 10, fontWeight: 700 }}
                color="text.secondary"
              >
                <ArrowDownward style={{ fontSize: 10, color: "red" }} />
                <span style={{ color: "red" }}>2%</span> this month
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ width: { md: 250, xs: 300 } }}>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ bgcolor: "#87CEFA", padding: "40px", marginRight: "10px" }}
              aria-label="recipe"
            >
              <AccountBalanceWalletOutlined
                style={{
                  fontSize: "50px",
                }}
              />
            </Avatar>
            <Box>
              <Typography sx={{ fontSize: 10 }} color="text.secondary">
                Balance
              </Typography>
              <Typography variant="h6" component="div">
                $2.4K
              </Typography>
              <Typography
                sx={{ fontSize: 10, fontWeight: 700 }}
                color="text.secondary"
              >
                <ArrowDownward style={{ fontSize: 10, color: "red" }} />
                <span style={{ color: "red" }}>2%</span> this month
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ width: { md: 250, xs: 300 } }}>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ bgcolor: "#DDA0DD", padding: "40px", marginRight: "10px" }}
              aria-label="recipe"
            >
              <LocalMallOutlined
                style={{
                  fontSize: "50px",
                }}
              />
            </Avatar>

            <Box>
              <Typography sx={{ fontSize: 10 }} color="text.secondary">
                Total Sales
              </Typography>
              <Typography variant="h6" component="div">
                $89K
              </Typography>
              <Typography
                sx={{ fontWeight: 700, fontSize: 10 }}
                color="text.secondary"
              >
                <ArrowUpward style={{ fontSize: 10, color: "#32CD32" }} />
                <span style={{ color: "#32CD32" }}>11%</span>
                this week
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Box
        margin="30px"
        sx={{
          display: { md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Card sx={{ width: 800, display: { xs: "none", md: "block" } }}>
          <CardContent>
            <Box
              sx={{
                marginBottom: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography sx={{ fontSize: 18, fontWeight: 700 }}>
                  Overview
                </Typography>
                <Typography sx={{ fontSize: 12 }} color="text.secondary">
                  Monthly Earning
                </Typography>
              </Box>

              <FormControl
                size="small"
                sx={{
                  width: "150px",
                  borderRadius: "10px",
                  border: "none",
                }}
              >
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Quaterly</em>
                  </MenuItem>
                  <MenuItem value={10}>Monthly</MenuItem>
                  <MenuItem value={20}>Weekely</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box>
              <ChartContainer
                width={800}
                height={250}
                series={[{ data: uData, label: "uv", type: "bar" }]}
                xAxis={[{ scaleType: "band", data: xLabels }]}
              >
                <BarPlot />
              </ChartContainer>
            </Box>
          </CardContent>
        </Card>

        <Card sx={{ width: 300 }}>
          <CardContent>
            <Box sx={{ marginBottom: 2 }}>
              <Typography sx={{ fontSize: 18, fontWeight: 700 }}>
                Customers
              </Typography>
              <Typography sx={{ fontSize: 12 }} color="text.secondary">
                Customers that buy products
              </Typography>
            </Box>
            <PieChart
              sx={{ paddingLeft: "40px" }}
              series={[{ data, innerRadius: 80 }]}
              {...size}
            >
              <PieCenterLabel>65%</PieCenterLabel>
            </PieChart>
          </CardContent>
        </Card>
      </Box>
      <Box
        margin="30px"
        sx={{
          backgroundColor: colors.white,
          padding: 5,
          display: { xs: "none", md: "block" },
        }}
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography sx={{ fontSize: 18, fontWeight: 700 }}>
            Product Shell
          </Typography>
          <Box display={"flex"} justifyContent={"space-between"}>
            <InputBase
              placeholder="Search..."
              sx={{
                alignItems: "center",
                borderRadius: "5px",
                border: "1px solid #D3D3D3",
                backgroundColor: colors.white,
                marginRight: 10,
              }}
              startAdornment={
                <SearchIcon
                  sx={{
                    color: "#808080",
                  }}
                />
              }
            />

            <FormControl
              size="small"
              sx={{
                width: "150px",
                borderRadius: "10px",
                border: "none",
              }}
            >
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Last 30 Days</em>
                </MenuItem>
                <MenuItem value={10}>Last 30 Weeks</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Stack direction={"row"} flex={1}>
          <Typography
            sx={[styles.productHeader, { flex: 1 }]}
            color="text.secondary"
          >
            Product Name
          </Typography>

          <Typography sx={styles.productHeader} color="text.secondary">
            Stock
          </Typography>

          <Typography sx={styles.productHeader} color="text.secondary">
            Price
          </Typography>

          <Typography sx={styles.productHeader} color="text.secondary">
            Total sales
          </Typography>
        </Stack>

        <Divider sx={{ mt: 2, mb: 1 }} />

        <Stack direction={"row"} flex={1}>
          <img
            src={require("../assets/images/dummy_img2.jpeg")}
            alt="golden-prompt"
            height={50}
            width={80}
            style={{
              borderRadius: "10px",
              marginRight: 10,
            }}
          />
          <Typography sx={{ flex: 1, fontWeight: 600 }}>
            Sarphens Illustration
            <Typography sx={{ fontSize: 12 }} color={"text.secondary"}>
              Lorem ipsum
            </Typography>
          </Typography>
          <Typography sx={{ paddingRight: 6 }}>30 in stocks</Typography>
          <Typography sx={{ paddingRight: 9 }}>$15.99</Typography>
          <Typography sx={{ paddingRight: 9 }}>10</Typography>
        </Stack>

        <Stack direction={"row"} flex={1} mt={2}>
          <img
            src={require("../assets/images/dummy_img1.jpeg")}
            alt="golden-prompt"
            height={50}
            width={80}
            style={{
              borderRadius: "10px",
              marginRight: 10,
            }}
          />
          <Typography sx={{ flex: 1, fontWeight: 600 }}>
            Abstract 3D
            <Typography sx={{ fontSize: 12 }} color={"text.secondary"}>
              Lorem ipsum
            </Typography>
          </Typography>
          <Typography sx={{ paddingRight: 6 }}>32 in stocks</Typography>
          <Typography sx={{ paddingRight: 9 }}>$45.99</Typography>
          <Typography sx={{ paddingRight: 9 }}>20</Typography>
        </Stack>
      </Box>
    </Box>
  );
}

const styles = {
  productHeader: {
    fontSize: 12,
    paddingRight: 8,
    paddingTop: 2,
  },
};

export default Feed;
