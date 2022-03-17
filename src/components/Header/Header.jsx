import React, { useEffect, useRef, useState } from "react";
import style from "./Header.module.scss";
import Logo from "../../assets/new/logo.png";
import Image from "next/image";
import { MainMenu } from "./Menu/MainMenu";

const Header = ({ inView }) => {
  return (
    <header
      className={`${style.mainHeader} ${
        inView ? style.mainHeaderBlack : style.mainHeaderWhite
      }`}
    >
      <div className={`container`}>
        <div className={style.header}>
          <div className={style.logo}>
            <Image width={75} height={75} src={Logo} className={style.logo_image}/>
            <h2>Ta Trains Inc</h2>
          </div>
          <MainMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
