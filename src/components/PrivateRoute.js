import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Profile from "./Profile";
import Login from "./Login";
import Signup from "./Signup";

export default function PrivateRoute({ page }) {
  const { currentUser } = useAuth();
  switch (page) {
    case "/":
      return currentUser ? <Profile /> : <Navigate to="/login" />;
    case "login":
      return currentUser ? <Navigate to="/" /> : <Login />;
    case "signup":
      return currentUser ? <Navigate to="/" /> : <Signup />;
    default:
      return currentUser ? <Profile /> : <Navigate to="/login" />;
  }
}
