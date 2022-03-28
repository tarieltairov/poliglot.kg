import React from "react";
import style from "./Header.module.scss";
import { MainMenu } from "./Menu/MainMenu";
import Link from "next/link";
const Header = ({ inView }) => {
  return (
    <header
      className={`${style.mainHeader} ${inView ? style.mainHeaderBlack : style.mainHeaderWhite
        }`}
    >
      <div className={`container`}>
        <div className={style.header}
        >
          <div className={style.logo}>
            <Link href="/">

              <h2>TA TRANS INC</h2>
            </Link>
          </div>

          <div className={style.links}>
            <Link href="/"><p>HOME</p></Link>
            <Link href="/#about"><p>ABOUT US</p></Link>
            <Link href="/#services"><p>SERVICES</p></Link>
            <Link href="/#solutions"><p>SOLUTIONS</p></Link>
            <Link href="/#contacts"><button className={style.button}>
              Apply now
            </button></Link>
          </div>
          <div
            className={style.burger}>

            <MainMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
