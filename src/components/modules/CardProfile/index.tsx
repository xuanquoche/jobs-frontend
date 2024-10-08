import { Avatar, Grid } from "@mui/material";
import { CardMuiProfile } from "./style";
import DefaultUserAvatar from "../../../assets/images/avatar-default-svgrepo-com.svg";
import { Creator } from "../../../types/users.type";
import Input from "../../common/Input";
import Button from "../../common/Button";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { updateCreator } from "../../../api/creator/updateCreator";
import Select from "../../common/Select";
import Chip from "@mui/material/Chip";
import { SKILLS } from "../../../constant/constant";
import { Levels } from "../../../constant/enum";

interface UserProfle extends Creator {}

export const CardProfile = ({
  fullname,
  avatar,
  email,
  level,
  address,
  skills,
  phone,
  description,
}: UserProfle) => {
  const initialUser: Creator = {
    skills: skills || [],
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
  const [skillTag, setSkillTag] = useState<string[]>([]);
  const [skillTagFirst, setSkillTagFirst] = useState<string[]>([]);

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
      const res = await updateCreator(user);
      setIsUpdate(false);
      return res;
    } catch (error) {
      throw error;
    }
  };
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    if (!skillTag.includes(value)) {
      setSkillTag((prev) => [...prev, value]);
      setUser((prevUser: Creator) => ({
        ...prevUser,
        skills: [...(prevUser.skills || []), value],
      }));
    }
  };

  const handleDelete = (skillToDelete: string) => {
    setSkillTag((prevSkillTag) =>
      prevSkillTag.filter((skill) => skill !== skillToDelete)
    );
  };

  useEffect(() => {
    if (user.skills) {
      const skillName: string[] = [];
      user.skills.map((skill: any) => {
        skillName.push(skill.name);
      });
      setSkillTagFirst(skillName);
    }
  }, []);

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
                variant="contained"
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
                <div className="tagAction">
                  {skillTagFirst.map((skill) => (
                    <div className="chipDetail my-4 ">
                      <Chip label={skill} />
                    </div>
                  ))}
                  {skillTag &&
                    skillTag.map((_skill, index) => (
                      <div className="chipDetail">
                        <Chip
                          label={_skill}
                          onDelete={() => handleDelete(_skill)}
                        />
                      </div>
                    ))}
                </div>
                <div className="selectBtn flex">
                  <label
                    className="min-w-20 flex justify-start items-center font-bold mr-1.5"
                    htmlFor="skill"
                  >
                    Skill
                  </label>
                  <Select
                    name="skills"
                    options={SKILLS}
                    onChange={handleSelectChange}
                  />
                </div>
              </div>
            </div>

            <div className="actionButton">
              {isUpdate ? (
                <div style={{ gap: "20px" }}>
                  <Button
                    text="Cancel"
                    variant="outlined"
                    onClick={() => {
                      setIsUpdate(false);
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    text="Update"
                    onClick={handleUpdate}
                  />
                </div>
              ) : null}
            </div>
          </form>
        </CardMuiProfile>
      </Grid>
    </Grid>
  );
};
