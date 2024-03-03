"use client";
import { useContext, useEffect } from "react";
import { AdminContext } from "@/context/AdminContext";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const router = useRouter();
  const { user, logoutAdmin } = useContext(AdminContext);

  useEffect(() => {
    // Redirect to login page if user is not logged in
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  const handleLogout = async () => {
    await logoutAdmin();
    router.push("/login"); // Redirect to the login page after logout
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DashboardPage;
