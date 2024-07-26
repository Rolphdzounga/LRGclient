import { Typography, Box, useTheme, Badge, Tooltip, IconButton } from "@mui/material";
import React from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
const Header = ({ title, subtitle,nb,refetch }) => {
  const theme = useTheme();
  return (
    <Box>
      
      <Badge badgeContent={nb} color="primary">
        <Typography
          variant="h6"
          color='black'
          fontWeight="bold"
          sx={{ mb: "5px" }}
        >
          {title}
        </Typography>
        
        {title === "DASHBOARD" && <Tooltip arrow title="Refresh Data">
                <IconButton onClick={() => refetch()}>
                  {/* <RefreshIcon /> */}
                </IconButton>
        </Tooltip>}
      </Badge>
      <Typography variant="h5" color={theme.palette.secondary[300]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
