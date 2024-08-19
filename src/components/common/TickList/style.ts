import List from '@mui/material/List';

import { styled } from "@mui/material/styles";


const TickList = styled(List)(({ theme }) => ({
"&.text-tick": {
  backgroundColor: theme.palette.error.main,
  color: theme.palette.error.contrastText,
}
}));

export default TickList
