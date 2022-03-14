import React from "react";
import style from "./Header.module.scss";
import Logo from "../../assets/svg/logo.svg";
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
            <Image width={33} height={33} src={Logo} />
            <h2>ZettaSoft</h2>
          </div>
          <MainMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
