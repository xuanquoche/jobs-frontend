/* eslint-disable no-empty-pattern */
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";

export const CardMui = styled(Card)(({}) => ({
  maxWidth: "30%",
}));

export const CardHeaderCustom = styled(CardHeader)(({}) => ({
  ".MuiCardHeader-title": {
    textAlign: "left",
    fontSize: "1.5rem",
    fontWeight: "700",
  },
}));

export const AvatarCustom = styled(Avatar)(({}) => ({
  "@media (max-width: 375px)": {
    display: "none",
  },
}));

export const CardContentCustom = styled(CardContent)(({}) => ({
  ".jobName": {
    textAlign: "left",
    fontSize: "1.25rem",
    fontWeight: "700",
  },
  ".jobDescription": {
    textAlign: "left",
    marginTop: "10px",
  },
}));
export const CardActionsCustom = styled(CardActions)(({}) => ({}));
