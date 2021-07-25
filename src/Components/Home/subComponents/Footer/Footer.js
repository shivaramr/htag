import React from "react";
import logo from "../../../../Helper/Pics/logo.png";

import style from "./style.module.css";

function Footer() {
  return (
    <>
      <div className={style.foot}>
        <img src={logo} alt="logo" className={style.logo} />
        <div>
          <button className={style.button}>How Fanconvo Works?</button>
          <button className={style.button}>Terms of Use</button>
          <button className={style.button}>Contact Us</button>
        </div>
      </div>
      <label className={style.txt}>c 2021 Fanconvo</label>
    </>
  );
}

export default Footer;
