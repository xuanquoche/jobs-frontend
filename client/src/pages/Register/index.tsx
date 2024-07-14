import { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import { Tag } from "../../components/common/Tag";
import { Button } from "../../components/common/Button";
import { Input } from "../../components/common/Input";
import google from "../../assets/icon/google.png";
import apple from "../../assets/icon/Apple.png";
import Sidebar from "../../components/modules/sidebarLogin";
import { useNavigate } from "react-router-dom";
import { FormErrors, User } from "../../types/users.type";
import { registerUser } from "../../api/registerApi";
import { useMutation } from "@tanstack/react-query";
import { validateAuthen } from "../../utils/AuthenValidate";
import "./register.css"

const initialUser: User = {
  username: "",
  email: "",
  password: "",
};
const Register = () => {
  const [user, setUser] = useState(initialUser);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isDisable, setisDisable] = useState(true);
  const navigate = useNavigate();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setUser((prevUser: User) => ({
      ...prevUser,
      [name]: value,
    }));

    const updatedUser = { ...user, [name]: value };
    const errors = validateAuthen(updatedUser);
    console.log(errors);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errors[name],
    }));
  };

  const { mutate } = useMutation({
    mutationFn: (user: User) => {
      return registerUser(user);
    },
  });

  useEffect(() => {
    const isFormValid = Object.values(formErrors).every((error) => !error);
    const isUserNotEmpty = Object.values(user).every(
      (value) => value.trim() !== ""
    );
    console.log(isUserNotEmpty);
    setisDisable(!isFormValid || !isUserNotEmpty);
  }, [formErrors, user]);

  const handleSignup = async () => {
    try {
      mutate(user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const services = [
    {
      icon: google,
      text: "Google",
    },
    {
      icon: apple,
      text: "Apple ID",
    },
  ];

  return (
    <div className="wrapp flex flex-row">
      <div className="sidebar mobile:hidden tablet:block ">
        <Sidebar title="Plan includes" />
      </div>
      <div className="content mobile:flex-1">
        <h2 className="text-start text-6xl font-black">Sign Up</h2>

        <div className="socialLabel text-start my-10">
          <b>Sign up with Open account</b>
        </div>

        <div className="social flex gap-4 flex-row">
          {services.map((service, index) => (
            <Tag key={index} icon={service.icon} text={service.text} />
          ))}
        </div>

        <hr className="my-10 h-2" />

        <div className="anotherWay-signUp text-start my-6">
          <b className="">Or continue with email address</b>
        </div>

        <form action="" className="form-signup flex gap-4 flex-col">
          <Input
            isTrue={!formErrors.username}
            isError={!!formErrors.username}
            formError={formErrors.username}
            name="username"
            onChange={handleChange}
            value={user.username}
            type="text"
            className="w-100"
            placeholder="Your Name"
          />
          <Input
            isTrue={!formErrors.email}
            isError={!!formErrors.email}
            formError={formErrors.email}
            name="email"
            onChange={handleChange}
            value={user.email}
            type="email"
            className="w-100"
            placeholder="Your email"
          />
          <Input
            isTrue={!formErrors.password}
            isError={!!formErrors.password}
            formError={formErrors.password}
            name="password"
            onChange={handleChange}
            value={user.password}
            type="password"
            className="w-100"
            placeholder="Password"
          />
          <Button
            className="w-100"
            variant={"contained"}
            kind={"primary"}
            text={"Continue"}
            disabled={isDisable}
            type="submit"
            onClick={handleSignup}
          />
        </form>

        <div className="recapcha mt-10 text-start">
          <p>
            This site is protected by reCAPTCHA and the Google Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
