import { User } from "../types/users.type";
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
