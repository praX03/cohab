import React, { Fragment } from "react";
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function ToggleUserLogin() {
  const [ToggleLogin, setToggleLogin] = useState(false);
  return (
    <Fragment>
      {!ToggleLogin && <SignUp toggleLogin={setToggleLogin} />}
      {ToggleLogin && <Login toggleLogin={setToggleLogin} />}
    </Fragment>
  );
}

export default ToggleUserLogin;
