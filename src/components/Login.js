import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (err) {
      setError("failed to log in");
    }
  };

  return (
    <div className=" mx-auto w-fit rounded-lg border border-main bg-white px-6 py-10 sm:min-w-[350px]">
      <h2 className="mx-auto mb-5 w-fit text-3xl font-extrabold">Login</h2>
      {error && <div>an error has occured</div>}
      <form className="flex flex-col" onSubmit={handleLogin}>
        <label className="my-2">Email</label>
        <input
          className="mb-5 rounded border border-gray px-2 py-1 outline-none"
          type="email"
          ref={emailRef}
          required
        />

        <label className="my-2">Password</label>
        <input
          className="mb-10 rounded border border-gray px-2 py-1 outline-none"
          type="password"
          ref={passwordRef}
          required
        />

        <button
          className="mx-auto mb-3 w-full rounded  bg-main px-7 py-2 font-medium duration-150 hover:shadow-md hover:shadow-main/30 "
          disabled={loading}
          type="submit"
        >
          Login
        </button>
      </form>
      <div className="mx-auto w-fit text-xs">
        You do not have an account?{" "}
        <Link to="/signup" className="text-gray duration-150 hover:text-main">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
