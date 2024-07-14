import ButtonMaterialUI from "@mui/material/Button";
import { styled } from "@mui/material/styles";


const ButtonTagMui = styled(ButtonMaterialUI)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  fontSize: '16px',
  color: `${theme.palette.primary.dark}`,
  borderRadius: '12px !important',
  cursor: 'pointer',
  border: `2px solid ${theme.palette.grey[500]}`,
  gap: '8px',
  textAlign: 'center',
  outline: 'none',
}));

export default ButtonTagMui
