import { User } from "../types/users.type";
import http from "../utils/http";

export const registerUser = async (user: User) => {
  try {
    const response = await http.post<User>("/api/auth/local/register", user);
    console.log("registration success", response.data);
    return response.data;
  } catch (error) {
    console.log("registration fail", error);
    throw error;
  }
};
