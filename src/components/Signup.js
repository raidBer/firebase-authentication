import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confPasswordRef = useRef();

  const { signup } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confPasswordRef.current.value) {
      return setError("passwords don't match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (err) {
      setError("failed to create an account");
    }
  };

  return (
    <div className=" mx-auto w-fit rounded-lg border border-main bg-white px-6 py-10 sm:min-w-[350px]">
      <h2 className="mx-auto mb-5 w-fit text-3xl font-extrabold">SignUp</h2>
      {error && (
        <div className="rounded bg-main/20 py-2 text-center">{error}</div>
      )}

      <form id="signup" className="flex flex-col" onSubmit={handleSubmit}>
        <label className="my-2">Email</label>
        <input
          className="mb-5 rounded border border-gray px-2 py-1 outline-none"
          type="email"
          ref={emailRef}
          required
        />

        <label className="my-2">Password</label>
        <input
          className="mb-5 rounded border border-gray px-2 py-1 outline-none"
          type="password"
          ref={passwordRef}
          required
        />
        <label className="my-2">Password confirmation</label>
        <input
          className="mb-10 rounded border border-gray px-2 py-1 outline-none"
          type="password"
          ref={confPasswordRef}
          required
        />

        <button
          className="mx-auto mb-3 w-full rounded  bg-main px-7 py-2 font-medium duration-150 hover:shadow-md hover:shadow-main/30"
          disabled={loading}
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <div className="mx-auto w-fit text-xs">
        Already have an account?{" "}
        <Link to="/login" className="text-gray duration-150 hover:text-main">
          Login
        </Link>
      </div>
    </div>
  );
}
