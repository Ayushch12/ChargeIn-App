import {
    DarkModeOutlined,
    LightModeOutlined
} from "@mui/icons-material";
import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Typography,
    useTheme
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import { useState } from "react";
import { IoMdNotifications } from 'react-icons/io';
import { useDispatch } from "react-redux";
import { setMode } from "state";


  const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
    const dispatch = useDispatch();
    const theme = useTheme();


    const [ setAnchorEl] = useState(null);

    const handleClick = (event) => setAnchorEl(event.currentTarget);


    return (
      <AppBar
        sx={{
          position: "static",
          background: "none",
          boxShadow: "none",

        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* LEFT SIDE */}
          <FlexBetween>

            <FlexBetween
              backgroundColor={theme.palette.background.alt}
              borderRadius="9px"
              gap="3rem"
              p="0.1rem 1.5rem"
            >

            </FlexBetween>
          </FlexBetween>

          <FlexBetween gap="1.5rem">
            <IconButton onClick={() => dispatch(setMode())}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlined sx={{ fontSize: "25px" }} />
              ) : (
                <LightModeOutlined sx={{ fontSize: "25px" }} />
              )}
            </IconButton>

            <FlexBetween>
              <Button
                onClick={handleClick}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textTransform: "none",
                  gap: "1rem",
                }}
              >
                <Box textAlign="left">
                  <Typography
                    fontWeight="bold"
                    fontSize="0.85rem"
                    sx={{ color: theme.palette.secondary[100] }}
                  >
                    {user.name}
                  </Typography>
                  <Typography
                    fontSize="0.75rem"
                    sx={{ color: theme.palette.secondary[200] }}
                  >
                    {user.occupation}
                  </Typography>
                </Box>

              </Button>


              <div style={{ display: 'flex', alignItems: 'center' }}>
    Bonjour, Prénom Nom
    <IoMdNotifications style={{ marginLeft: '10px' }} />
  </div>


            </FlexBetween>
          </FlexBetween>
        </Toolbar>
      </AppBar>
    );
  };

  export default Navbar;