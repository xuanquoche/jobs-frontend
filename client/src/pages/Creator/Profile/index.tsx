import { CardProfile } from "../../../components/common/CardProfile";
import { Wrapper } from "./style";

export const CreatorProfile = () => {
  return (
    <Wrapper className="wrapper">
      <div className="profile" style={{ width: "80%", margin: "50px auto" }}>
        <CardProfile
          fullname="Justin"
          email="halo@creator.dev"
          location="USa"
          skill="React"
          level="MIDDle"
          phone="0378300349"
        />
      </div>
    </Wrapper>
  );
};
