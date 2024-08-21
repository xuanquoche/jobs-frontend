import http from "../../utils/http";
import { Creator } from "../../types/users.type";
import { getAccessToken } from "../../utils/tokenStorage";

export const updateCreator = async (user: Creator) => {
  try {
    const access_token = getAccessToken();
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    };
    const response = await http.patch<Creator>("/users/me", user, {
      headers,
    });
    console.log("reso", response);
    return response.data;
  } catch (error: any) {
    console.log("Chi tiết lỗi từ server:", error.response);
    throw error;
  }
};
