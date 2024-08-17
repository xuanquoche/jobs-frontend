import { User } from "../types/users.type";
import http from "../utils/http";

export const registerUser = async (user: User) => {
  try {
    console.log(user);
    const response = await http.post<User>("/users/register", user);
    console.log("registration success", response.data);
    return response.data;
  } catch (error) {
    console.log("registration fail", error);
    throw error;
  }
};
