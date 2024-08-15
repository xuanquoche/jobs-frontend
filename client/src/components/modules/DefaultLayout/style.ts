import { styled } from "@mui/material/styles";
import theme from "../../../assets/themes/colors";

export const SidebarWrapper = styled("div")({
  backgroundColor: theme.palette.primary.contrastText,
  width: "20%",
  "@media (max-width: 375px)": {
    display: "none",
  },
  "@media (max-width: 780px)": {
    width: "10%",
  },
});

export const ContentWrapper = styled("div")({
  width: "75%",
  "@media (max-width: 375px)": {
    width: "100% !important",
  },
});
