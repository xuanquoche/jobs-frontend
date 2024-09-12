import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Logout } from "../api/auth/logoutApi";
import { clearTokens } from "../utils/tokenStorage";

const useLogout = () => {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: Logout,

    onSuccess: () => {
      clearTokens();

      navigate("/");
    },

    onError: (error) => {
      console.error("Đã xảy ra lỗi khi logout:", error);
    },
  });

  const logout = () => {
    mutate();
  };

  return { logout, isPending };
};

export default useLogout;
