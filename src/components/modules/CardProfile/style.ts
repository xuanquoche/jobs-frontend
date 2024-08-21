/* eslint-disable no-empty-pattern */
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

export const CardMuiProfile = styled(Card)(({}) => ({
  margin: "auto auto",
  ".userInfoMain": {
    display: "flex",
    flexDirection: "column",
    height: "80dvh",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    ".avatar": {
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
    },
    ".userName": {
      fontSize: "2rem",
      fontWeight: "800",
    },
    ".actionEditButton": {
      ".buttonEdit": {
        margin: "30px 0",
        width: "65%",
      },
    },
  },
  ".userInfoDetail": {
    height: "80dvh",
    display: "flex",
    flexDirection: "column",
    justifiedContent: "space-arround",
    padding: "50px 30px",
    ".skill": {
      display: "flex",
      flexDirection: "column",
      ".tagAction": {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
      },
    },
  },
}));
