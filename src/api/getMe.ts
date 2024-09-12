import { User } from "../types/users.type";
import http from "../utils/http";
import { getAccessToken } from "../utils/tokenStorage";

interface ResponseGetMe {
  message: string;
  data: User;
}

export const getMe = async () => {
  try {
    const access_token = getAccessToken();
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    };
    const response = await http.get<ResponseGetMe>("/users/me", {
      headers,
    });
    console.log(1);
    return response.data.data;
  } catch (error) {
    console.log("fetch user fail", error);
    throw error;
  }
};
