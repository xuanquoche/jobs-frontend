import NativeSelect from "@mui/material/NativeSelect";
import { styled } from "@mui/material/styles";

export const SelectCustom = styled(NativeSelect)(({ theme }) => ({
  border: "1px solid #cfcaca",
  borderRadius: "14px",
  padding: "10px",
  minWidth: "124px",
}));
