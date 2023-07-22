import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch (err) {
      setError("failed to logout");
    }
  };

  const { currentUser, logout } = useAuth();

  return (
    <div className=" mx-auto w-fit rounded-lg border border-main bg-white px-6 py-10 sm:min-w-[350px]">
      <h2 className="mx-auto mb-5 w-fit text-3xl font-extrabold">
        Current User:
      </h2>
      <div className="mb-7 text-center text-xl">{currentUser.email}</div>
      <button
        className="mx-auto mb-3 w-full rounded  bg-main px-7 py-2 font-medium duration-150 hover:shadow-md hover:shadow-main/30"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
