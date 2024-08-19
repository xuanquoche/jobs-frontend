import { Avatar, Grid } from "@mui/material";
import { CardMuiProfile } from "./style";
import DefaultUserAvatar from "../../../assets/images/avatar-default-svgrepo-com.svg";
import { Creator } from "../../../types/users.type";
import Input from "../Input";
import Button from "../Button";
import { ChangeEvent, useCallback, useState } from "react";
import { updateCreator } from "../../../api/creator/updateCreator";

interface UserProfle extends Creator {}

export const CardProfile = ({
  fullname,
  avatar,
  email,
  level,
  address,
  skill,
  phone,
  description,
}: UserProfle) => {
  const initialUser: Creator = {
    skill: skill || "",
    level: level || "",
    fullname: fullname || "",
    email: email || "",
    address: address || "",
    avatar: avatar || "",
    description: description || "",
    phone: phone || "",
  };
  const [isUpdate, setIsUpdate] = useState<Boolean>(false);
  const [user, setUser] = useState<Creator>(initialUser);

  const handleEditButton = useCallback(() => {
    setIsUpdate(true);
  }, [isUpdate]);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setUser((prevUser: Creator) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      if (user) {
        const res = await updateCreator(user);
        console.log("rsw", res);
        return res;
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <CardMuiProfile>
          <div className="userInfoMain">
            <div className="avatar">
              <Avatar
                src={avatar || DefaultUserAvatar}
                sizes="large"
                style={{ width: "60%", height: "85%" }}
              />
            </div>
            <div className="userName">{fullname}</div>
            <div className="actionEditButton">
              <Button
                className="buttonEdit"
                text="Edit"
                onClick={handleEditButton}
              />
            </div>
          </div>
        </CardMuiProfile>
      </Grid>
      <Grid item xs={7}>
        <CardMuiProfile>
          <form action="">
            <div className="userInfoDetail">
              <div className="userName">
                <Input
                  disabled={!isUpdate}
                  onChange={handleChange}
                  required
                  style={{ margin: "10px 0" }}
                  position={true}
                  value={user.fullname}
                  type="text"
                  label="Full name"
                  name="fullname"
                />
              </div>
              <div className="email">
                <Input
                  disabled={!isUpdate}
                  onChange={handleChange}
                  required
                  style={{ margin: "5px 0" }}
                  position={true}
                  value={user.email}
                  label="Email"
                  name="email"
                  type="text"
                />
              </div>
              <div className="level">
                <Input
                  disabled={!isUpdate}
                  onChange={handleChange}
                  required
                  style={{ margin: "5px 0" }}
                  position={true}
                  value={user.level}
                  label="Level"
                  type="text"
                  name="level"
                />
              </div>
              <div className="phone">
                <Input
                  disabled={!isUpdate}
                  onChange={handleChange}
                  required
                  style={{ margin: "5px 0" }}
                  position={true}
                  value={user.phone}
                  label="Phone"
                  name="phone"
                  type="text"
                />
              </div>
              <div className="location">
                <Input
                  disabled={!isUpdate}
                  onChange={handleChange}
                  required
                  style={{ margin: "5px 0" }}
                  position={true}
                  value={user.address}
                  label="Location"
                  type="text"
                  name="address"
                />
              </div>
              <div className="skill">
                <Input
                  disabled={!isUpdate}
                  onChange={handleChange}
                  required
                  style={{ margin: "5px 0" }}
                  position={true}
                  value={user.skill}
                  label="Skill"
                  type="text"
                  name="skill"
                />
              </div>
            </div>

            <div className="actionButton">
              {isUpdate ? (
                <>
                  <Button
                    text="Cancel"
                    variant="outlined"
                    onClick={() => {
                      setIsUpdate(false);
                    }}
                  />
                  <Button type="submit" text="Update" onClick={handleUpdate} />
                </>
              ) : null}
            </div>
          </form>
        </CardMuiProfile>
      </Grid>
    </Grid>
  );
};
