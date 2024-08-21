import { Avatar, Grid } from "@mui/material";
import { CardMuiProfile } from "./style";
import DefaultUserAvatar from "../../../assets/images/avatar-default-svgrepo-com.svg";
import { Creator } from "../../../types/users.type";
import Input from "../../common/Input";
import Button from "../../common/Button";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { updateCreator } from "../../../api/creator/updateCreator";
import Select, { OptionsProps } from "../../common/Select";
import Chip from "@mui/material/Chip";

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

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const SKILLS: OptionsProps[] = [
    {
      keyvalue: "React",
      textValue: "React",
    },
    {
      keyvalue: "Nodejs",
      textValue: "Nodejs",
    },
    {
      keyvalue: "Go",
      textValue: "Go",
    },
    {
      keyvalue: "SQL",
      textValue: "SQL",
    },
    {
      keyvalue: "Angular",
      textValue: "Angular",
    },
    {
      keyvalue: "PHP",
      textValue: "PHP",
    },
    {
      keyvalue: "NextJs",
      textValue: "NextJs",
    },
  ];

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
                    <div className="chipDetail">
                      <Chip label={skill} onDelete={handleDelete} />
                    </div>
                  ))}
                  {skillTag &&
                    skillTag.map((_skill, index) => (
                      <div className="chipDetail">
                        <Chip label={_skill} onDelete={handleDelete} />
                      </div>
                    ))}
                </div>
                <Select options={SKILLS} onChange={handleSelectChange} />
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
                  <Button type="submit" text="Update" onClick={handleUpdate} />
                </div>
              ) : null}
            </div>
          </form>
        </CardMuiProfile>
      </Grid>
    </Grid>
  );
};
