import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const IconButtonMui = styled(IconButton)(({ theme }) => ({
  display: "inline-block",
  fontSize: "16px",
  borderRadius: "12px",
  cursor: "pointer",
  gap: "8px",
  textAlign: "center",
  border: "none",
  outline: "none",
  "&:focus": {
    outline: "none",
  },
  "&.primary": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  "&.outlined": {
    border: "1px solid " + theme.palette.grey[400],
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.dark,
    fontWeight: "bold",
  },
  "&.disabled": {
    opacity: 0.5,
  },
}));

export default IconButtonMui;
