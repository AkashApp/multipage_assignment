import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";

export const Home = () => {
  const navigate = useNavigate();

  const LoginClick = () => {
    navigate("/registration/one");
  };
  const UserClick = () => {
    navigate("/registration/user");
  };
  return (
    <div className="Main_Home">
      <div className="Nav">
        <button className="Login" onClick={LoginClick}>
          Login
        </button>
        <button className="User_list" onClick={UserClick}>
          Users
        </button>
      </div>
    </div>
  );
};
