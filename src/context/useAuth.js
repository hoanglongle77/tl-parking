// useAuth.js
import { useContext } from "react";
import { AdminContext } from "./AdminContext";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const { user } = useContext(AdminContext);
  const router = useRouter();

  if (!user) {
    router.push("/login"); // Redirect to login page if user is not logged in
  }

  return user;
};

export default useAuth;
