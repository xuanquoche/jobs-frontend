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
    console.log(user);
    const response = await http.patch<Creator>("/users/me", user, {
      headers,
    });
    console.log("reso", response);
    // return response.data;
  } catch (error) {
    console.log("update creator fail", error);
    throw error;
  }
};
