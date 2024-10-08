import { styled } from "@mui/material/styles";
import theme from "../../../assets/themes/colors";
import { ListItemText } from "@mui/material";
export const SidebarWrapper = styled("div")(({}) => ({
  height: "100vh",
  "@media (max-width: 375px)": {
    display: "none",
  },
}));

export const SidebarText = styled(ListItemText)({
  "@media (max-width: 780px)": {
    display: "none",
  },
});
