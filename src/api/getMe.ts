import { useEffect } from "react";
import { useCheckAuthentication } from "../hook/useCheckAuthentication";
import { User } from "../types/users.type";
import http from "../utils/http";
import { getAccessToken } from "../utils/tokenStorage";

interface ResponseGetMe {
  message: string;
  data: User;
}

export const getMe = async () => {
  //   const checkIsLogin = useCheckAuthentication();
  //   useEffect(() => {
  //     console.log("check is login", checkIsLogin);
  //   }, [checkIsLogin]);
  try {
    // if (checkIsLogin) {

    // }

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
