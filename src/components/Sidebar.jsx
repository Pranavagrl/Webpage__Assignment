import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  AccountBalanceWallet,
  AccountBox,
  Approval,
  Dashboard,
  DashboardCustomizeTwoTone,
  Help,
  Inventory,
} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  ButtonBase,
  Card,
  CardHeader,
  useMediaQuery,
} from "@mui/material";
import colors from "../assets/colors";

const drawerWidth = 250;

function Sidebar() {
  const isScreenBig = useMediaQuery("(min-width:900px)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(isScreenBig);

  const drawer = (
    <>
      <Box sx={styles.drawerContainer}>
        <List>
          {/* Header */}
          <Box marginLeft={"20px"}>
            <ButtonBase>
              <DashboardCustomizeTwoTone sx={{ color: colors.white }} />
              <Typography
                fontWeight={700}
                fontSize={"24px"}
                ml={"20px"}
                color={colors.white}
              >
                Dashboard
              </Typography>
            </ButtonBase>
          </Box>

          {/* Dropdown of domain and channels */}
          {[
            {
              text: "Dashboard",
              icon: <Dashboard sx={{ color: colors.white }} />,
            },
            {
              text: "Product",
              icon: <Inventory sx={{ color: colors.white }} />,
            },
            {
              text: "Customers",
              icon: <AccountBox sx={{ color: colors.white }} />,
            },
            {
              text: "Income",
              icon: <AccountBalanceWallet sx={{ color: colors.white }} />,
            },
            {
              text: "Promote",
              icon: <Approval sx={{ color: colors.white }} />,
            },
            { text: "Help", icon: <Help sx={{ color: colors.white }} /> },
          ].map((item, index) => (
            <ListItem key={item.text}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{ sx: { color: colors.white } }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Footer */}
      <Box
        sx={[
          styles.footerContainer,
          {
            position: "absolute",
            bottom: 0,
            pb: "10px",
            alignItems: "center",
            px: "10px",
          },
        ]}
      >
        <Card sx={{ backgroundColor: "#2d2d69" }}>
          <CardHeader
            avatar={
              <Avatar src="https://material-ui.com/static/images/avatar/2.jpg" />
            }
            title="Pranav Agrawal"
            subheader="Project Manager"
            titleTypographyProps={{ sx: { color: colors.white } }}
            subheaderTypographyProps={{ sx: { color: colors.white } }}
          />
        </Card>
      </Box>
    </>
  );

  return (
    <Box>
      <Drawer
        variant={isScreenBig ? "permanent" : "temporary"}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#050540",
          },
          width: "200px",
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

const styles = {
  drawerContainer: {
    padding: "10px",
  },

  footerContainer: {
    width: "100%",
    marginTop: "auto",
  },
};

export default Sidebar;
