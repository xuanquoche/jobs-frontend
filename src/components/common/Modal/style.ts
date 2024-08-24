import { styled } from "@mui/material";
import { Modal as BaseModal } from "@mui/base/Modal";

export const ModalCustom = styled(BaseModal)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  // textAlign: "center",
  // color: theme.palette.text.secondary,
}));

export const ModalContent = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "0",
  right: "0",
  left: "0",
  maxWidth: "60%",
  maxHeight: "80%",
  margin: "100px auto",
  backgroundColor: "#ffffff",
  padding: "0 50px 30px 50px",
  overflow: "scroll",
  "&::-webkit-scrollbar": {
    width: "5px",
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: "10px",
    boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
    backgroundColor: "#555",
  },
  "&::-webkit-scrollbar-track": {
    boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
    borderRadius: "10px",
    backgroundColor: "#F5F5F5",
  },
}));

export const ModalOverlay = styled("div")(({ theme }) => ({
  position: "fixed",
  top: "0",
  right: "0",
  left: "0",
  bottom: "0",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.4)",
}));
