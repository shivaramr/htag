import React from "react";
import logo from "../../../../Helper/Pics/logo.png";
import style from "./style.module.css";

function TopNav() {
  return (
    <div className={style.top}>
      <img src={logo} alt="logo" className={style.logo} />
      <div>
        <button className={style.button}>Sign Up</button>
        <button className={style.button}>Login</button>
      </div>
    </div>
  );
}

export default TopNav;
