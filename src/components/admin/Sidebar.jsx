
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRightOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import { navItemsADMIN } from "./dataSidebar";
//import { navItemsADMIN, navItemsCAE, navItemsPend } from "../data/dataSidebar";

const Sidebar =  ({
    user,
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    isNonMobile,
}) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();
       
    useEffect(() => {
        setActive(pathname?.substring(1));
      }, [pathname]);
    
      //let navItems =  ["cae","admin"].includes(user?.profile) ? navItemsCAE : navItemsPend
      //let navItems =  ["cae"].includes(user?.profile) ? navItemsCAE : (["admin","doi","monet"].includes(user?.profile) ? navItemsADMIN : navItemsPend)
      let navItems =  navItemsADMIN
    
      return (
        <Box component="nav">
          {isSidebarOpen && (
            <Drawer
              open={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
              variant="persistent"
              anchor="left"
              sx={{
                width: drawerWidth,
                "& .MuiDrawer-paper": {
                  color: theme.palette.secondary[200],
                  backgroundColor: theme.palette.background.alt,
                  boxSixing: "border-box",
                  borderWidth: isNonMobile ? 0 : "2px",
                  width: drawerWidth,
                },
              }}
            >
              <Box width="100%">
                <Box m="1.5rem 2rem 2rem 2rem">
                  <FlexBetween color={theme.palette.secondary[100]}>
                    <Box display="flex" alignItems="center" gap="0.2rem">
                      <Typography variant="h4" fontWeight="bold">
                        GlobalViewer
                      </Typography>
                    </Box>
                    {!isNonMobile && (
                      <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <ChevronLeft />
                      </IconButton>
                    )}
                  </FlexBetween>

                </Box>
                <List>
                  {navItems && navItems.map(({ text, icon,titre }) => {
                    if (!icon) {
                      return (
                        <div key={text}>
                        <Divider />
                        <Typography   sx={{ m: "1.25rem 0 1rem 1.5rem" }}>
                          {text.toUpperCase()}
                        </Typography>
                        </div>
                      );
                    }
                    const lcText = text.toLowerCase();
    
                    return (
                      <ListItem key={text} disablePadding>
                        <ListItemButton
                          onClick={() => {
                            navigate(`/${lcText}`);
                            setActive(lcText);
                          }}
                          sx={{
                            width:"15px",
                            backgroundColor:
                              active === lcText
                                ? theme.palette.secondary[300]
                                : "transparent",
                            color:
                              active === lcText
                                ? theme.palette.primary[600]
                                : theme.palette.secondary[100],
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              width:"3px",
                              color:
                                active === lcText
                                  ? theme.palette.primary[600]
                                  : theme.palette.secondary[200],
                            }}
                          >
                            {icon}
                          </ListItemIcon> 
                          <ListItemText primary={titre}  />
                          {active === lcText && (
                            <ChevronRightOutlined sx={{ ml: "auto" }} />
                          )}
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
    
              <Box >
                
                <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 2rem">
                  {/* <Box
                    component="img"
                    alt="profile"
                    src={profileImage}
                    height="40px"
                    width="40px"
                    borderRadius="50%"
                    sx={{ objectFit: "cover" }}
                  /> */}


    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
    Conçu et Développé par Rolph DZOUNGA
    DPOSI/AFG BANK GABON
    @Copyright
    </Box>
                  {/* <SettingsOutlined
                    sx={{
                      color: theme.palette.secondary[300],
                      fontSize: "25px ",
                    }}
                  /> */}
                </FlexBetween>
              </Box>
            </Drawer>
          )}
        </Box>
      );
}

export default Sidebar