import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { getMe } from "../api/getMe";

export const useCheckRole = () => {
  const [role, setRole] = useState<string | null>(null);

  const { data, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ["getRole"],
    queryFn: getMe,
  });

  useEffect(() => {
    if (isSuccess) {
      console.log("role use check role ", data?.role.name);
      setRole(data?.role.name as string); // Lưu role nếu API trả về thành công
    }
  }, [isSuccess, data]);

  return { role, isLoading, isError, error, isSuccess }; // Trả về role và các trạng thái liên quan
};
