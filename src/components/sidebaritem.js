import { Box, ButtonBase } from "@mui/material";
import { Link } from "react-router-dom";

export const SideNavItem = (props) => {
  const { icon, path, title } = props;

  return (
    <li>
      <ButtonBase
        sx={{
          alignItems: "center",
          borderRadius: 1,
          display: "flex",
          justifyContent: "flex-start",
          pl: "16px",
          pr: "16px",
          py: "6px",
          textAlign: "left",
          width: "100%",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.04)",
            "& .icon": {
              color: "#6366f1",
            },
            "& .text": {
              color: "white",
            },
          },
        }}
        component={Link}
        to={path}
      >
        {icon && (
          <Box
            component="span"
            className="icon" // Add a class name for the icon span
            sx={{
              alignItems: "center",
              color: "neutral.400",
              display: "inline-flex",
              justifyContent: "center",
              mr: 2,
              "&:hover": {
                color: "#6366f1",
              },
            }}
          >
            {icon}
          </Box>
        )}
        <Box
          component="span"
          className="text"
          sx={{
            color: "neutral.400",
            flexGrow: 1,
            fontFamily: (theme) => theme.typography.fontFamily,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: "24px",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </Box>
      </ButtonBase>
    </li>
  );
};
