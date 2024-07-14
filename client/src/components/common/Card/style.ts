import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import { Typography, CardContent, CardActions, IconButton } from "@mui/material";

const CardMui = styled(Card)(({  }) => ({
  border: "none",
  boxShadow: "none",
  "&.content-product": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  "&.description": {
    display: "flex",
    flexDirection: "column",
  },
  "&.rating": {
    display: "flex",
    flexDirection: "row",
  },
  "&.description .product-name": {
    fontWeight: "bold",
  },
 
}));

export const TyographyCustom = styled(Typography)(({ theme }) => ({
  "&.product-name": {
    fontWeight: "bold",
  },
  "&.price": {
    height: "30%",
    padding: "4px 8px",
    borderRadius: "6px",
    backgroundColor: theme.palette.success.main,
    fontWeight: theme.typography.fontWeightBold,
  }
}))

export const CardContentCustome = styled(CardContent)(({  }) => ({
  padding: "16px 0",
  maxWidth: "300px",
}))


export const CardActionsCustome = styled(CardActions)(({  }) => ({
  padding: "16px 0",
}))
export const IconButtonCustom = styled(IconButton)(({  }) => ({
  padding: "16px 0",
}))

export const DivCustom = styled('div')(({  }) => ({
  padding: "none",
  "&.wrap-img-overlay": {
    position: "relative",
    "&:hover .overlay": {
      opacity: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }
  },
  "&.action-icon": {
    maxWidth: "62px",
  },
  "&.overlay": {
    display: "none",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    width: "100%",
    height: "100%", 
    opacity: 0,
    position: "absolute", 
    top: 0,
    left: 0, 
    transition: "opacity 0.3s ease", 
  }
}))

export default CardMui;
