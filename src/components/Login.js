import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/userSlice";

function Login() {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        padding: 12,
      }}
    >
      <button
        style={{ margin: 10 }}
        onClick={() => {
          dispatch(login({ name: "kkk", age: 13, email: "kkk@gmail.com" }));
        }}
      >
        Login
      </button>
      <button
        style={{ margin: 10 }}
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Login;
