import { useCallback, useEffect, useState } from "react";
import { CardProfile } from "../../../components/common/CardProfile";
import { Wrapper } from "./style";
import { Creator } from "../../../types/users.type";
import { fetchCreator } from "../../../api/creator/fetchCreator";
//skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const CreatorProfile = () => {
  const [user, setUser] = useState<Creator>();
  const fetchUser = async () => {
    const res = await fetchCreator();
    setUser(res.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <Wrapper className="wrapper">
      <div className="profile" style={{ width: "80%", margin: "50px auto" }}>
        {user ? (
          <CardProfile
            fullname={user.fullname}
            email={user.email}
            address={user.address}
            skill={user.skill}
            level={user.level}
            phone={user.phone}
            description={user.description}
            avatar={user.avatar}
          />
        ) : (
          <Skeleton count={5} />
        )}
      </div>
    </Wrapper>
  );
};
