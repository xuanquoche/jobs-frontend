import { useState } from "react";
import { ChangeEvent } from "react";
import { Tag } from "../../components/common/Tag";
import { Button } from "../../components/common/Button";
import { Input } from "../../components/common/Input";
import google from "../../assets/icon/google.png";
import apple from "../../assets/icon/Apple.png";
import { useNavigate } from "react-router-dom";
import { FormErrors, UserLoginform } from "../../types/users.type";
import { useMutation } from "@tanstack/react-query";
import { validateFormLogin } from "../../utils/AuthenValidate";
import { loginUser } from "../../api/fetchUser";

const initialUser: UserLoginform = {
  identifier: "",
  password: "",
};
const Login = () => {
  const [user, setUser] = useState(initialUser);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const navigate = useNavigate();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setUser((prevUser: UserLoginform) => ({
      ...prevUser,
      [name]: value,
    }));

    const updatedUser = { ...user, [name]: value };
    const errors = validateFormLogin(updatedUser);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errors[name],
    }));
  };

  const { mutate } = useMutation({
    mutationFn: (user: UserLoginform) => {
      return loginUser(user);
    },
    onSuccess: (data) => {
      window.localStorage.setItem("token", data.jwt || "");
      console.log("jwt", data);
      window.dispatchEvent(new Event("storage"));

      navigate("/home");

      // localStorage.clear();
    },
  });

  const handleSignIn = async () => {
    try {
      if (user.identifier && user.password) {
        mutate(user);
      }
    } catch (error) {
      console.error("Error:", error);
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
      <div className="content mobile:flex-1">
        <h2 className="text-start text-6xl font-black">Sign In</h2>

        <div className="socialLabel text-start my-10">
          <b>Sign in with Open account</b>
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
            isTrue={!formErrors.email}
            isError={!!formErrors.email}
            formError={formErrors.email}
            name="identifier"
            onChange={handleChange}
            value={user.identifier}
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
            disabled={false}
            type="submit"
            onClick={handleSignIn}
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

export default Login;
