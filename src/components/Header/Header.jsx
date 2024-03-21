import React from "react";
import style from "./Header.module.scss";
import { MainMenu } from "./Menu/MainMenu";
import Link from "next/link";
import Image from "next/image";
import logo from '../../assets/poliglot/snapedit_1711026401124.png';

const Header = ({ inView }) => {
  return (
    <header
      className={`${style.mainHeader} ${inView ? style.mainHeaderBlack : style.mainHeaderWhite
        }`}
    >
      <div>
        <div className={style.header}
        >
          <div className={style.logo}>
            <Link href="/">
              {/* <Image src={logo} /> */}
              <h2>Полиграф-Бишкек</h2>
            </Link>
          </div>

          <div className={style.links}>
            <Link href="/"><p>ГЛАВНАЯ</p></Link>
            <Link href="/#about"><p>О НАС</p></Link>
            <Link href="/#services"><p>УСЛУГИ</p></Link>
            {/* <Link href="/#solutions"><p>SOLUTIONS</p></Link> */}
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
