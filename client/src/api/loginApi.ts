import { UserLoginform } from "../types/users.type";
import http from "../utils/http";

export const loginUser = async (user: UserLoginform) => {
  const userLogin = {
    email: user.email,
    password: user.password,
  };
  try {
    const response = await http.post<UserLoginform>("/users/login", userLogin);
    console.log("hi", response.data);
    return response.data;
  } catch (error) {
    console.log("sign in fail", error);
    throw error;
  }
};
