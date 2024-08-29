import { styled } from "@mui/material/styles";
import theme from "../../../assets/themes/colors";

export const SidebarWrapper = styled("div")({
  position: "sticky",
  top: "0",

  backgroundColor: theme.palette.grey[500],
  overflow: "auto",
  width: "20%",
  "@media (max-width: 375px)": {
    display: "none",
  },
  "@media (max-width: 780px)": {
    width: "10%",
  },
});

export const ContentWrapper = styled("div")({
  flex: "1",
  overflowY: "auto",
  height: "100vh",
  width: "75%",
  "@media (max-width: 375px)": {
    width: "100% !important",
  },
});
