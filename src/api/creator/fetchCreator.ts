import { Creator } from "../../types/users.type";
import http from "../../utils/http";
import { getAccessToken } from "../../utils/tokenStorage";

interface ResponseData {
  data: Creator;
  message: string;
}
export const fetchCreator = async () => {
  try {
    const access_token = getAccessToken();
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    };
    const response = await http.get<ResponseData>("/users/me", {
      headers,
    });
    return response.data;
  } catch (error) {
    console.log("fetch user fail", error);
    throw error;
  }
};
