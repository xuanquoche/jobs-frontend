import { User, UserLoginform } from "../types/users.type";
import http from "../utils/http";

export const fetchUser = async () => {
  try {
    const response = await http.get<User[]>("/api/users");
    return response.data;
  } catch (error) {
    console.log("fetch user fail", error);
    throw error;
  }
};

export const loginUser = async (user: UserLoginform) => {
  const userLogin = {
    identifier: user.identifier,
    password: user.password,
  }
    try {
      
      const response = await http.post<UserLoginform>("/api/auth/local/", userLogin);
      console.log("hi",response.data)
      return response.data;
    } catch (error) {
      console.log("sign in fail", error);
      throw error;
    }
  };
