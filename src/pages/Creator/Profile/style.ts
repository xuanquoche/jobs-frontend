import styled from "@emotion/styled";
import backgroundImage from "../../../assets/images/background-image-profile.png";

export const Wrapper = styled("div")(({}) => ({
  backgroundImage: `url(${backgroundImage})`,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));
