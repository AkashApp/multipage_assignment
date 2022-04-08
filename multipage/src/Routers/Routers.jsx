import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Components/Home/Home";
import { One } from "../Components/One/One";
import { Two } from "../Components/Two/Two";
import { User } from "../Components/User/User";

export const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration/one" element={<One />} />
        <Route path="/registration/two" element={<Two />} />
        <Route path="/registration/user" element={<User />} />
      </Routes>
    </div>
  );
};
