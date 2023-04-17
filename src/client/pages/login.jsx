import React from "react";
import { useState } from "react";
import Login from "../components/Login.jsx";
import SignUp from "../components/SignUp.jsx";

function login() {
  const [ToggleLogin, setToggleLogin] = useState(false);
  return (
    <>
      {!ToggleLogin && <SignUp toggleLogin={setToggleLogin} />}
      {ToggleLogin && <Login toggleLogin={setToggleLogin} />}
    </>
  );
}

export default login;
