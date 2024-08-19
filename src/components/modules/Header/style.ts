/* eslint-disable no-empty-pattern */
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

export const HeaderCustom = styled("div")(({}) => ({
  margin: "20px 20px",
  display: "flex",
  justifyContent: "space-between",
  "@media (max-width: 375px)": {
    justifyContent: "space-around",
  },
}));

export const Search = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[500],
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  marginLeft: 0,
  width: "40% !important",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  "@media (max-width: 375px)": {
    display: "none",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  "@media (max-width: 375px)": {
    display: "none",
  },
}));

export const ActionBox = styled("div")(({}) => ({
  display: "flex",
  width: "15%",
  justifyContent: "space-between",
}));

export const AvatarCustom = styled(Avatar)(({}) => ({
  "@media (max-width: 375px)": {
    display: "none",
  },
}));

export const CreateBtn = styled("div")(({}) => ({
  textWrap: "nowrap",
  "@media (max-width: 375px)": {
    display: "none",
  },
}));

export const ButtonIcon = styled(IconButton)(({}) => ({
  "&:focus": {
    outline: "none",
    "@media (max-width: 375px)": {
      flex: "1",
    },
  },
}));

export const ButtonIconRes = styled(IconButton)(({}) => ({
  "&:focus": {
    outline: "none",
  },
  display: "none",
  "@media (max-width: 375px)": {
    display: "block",
    flex: "1",
  },
}));
