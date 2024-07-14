import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";


const InputStyle = styled(InputBase)(({ theme }) => ({
  width: "100%",
  borderRadius: "12px",
  padding: "8px",
  backgroundColor: theme.palette.grey[500],

".input": {
  border: "none",
  outline: "none",
  width: "100%",
  backgroundColor: "transparent",
},
"&.small": {
  fontSize: "15px",
  padding: "6px 12px",
},
"&.large": {
  fontSize: "12px",
  padding: "6px 12px",
},
"&.isError": {
  backgroundColor: theme.palette.error.main,
  color: theme.palette.error.contrastText,
}
}));

export default InputStyle
