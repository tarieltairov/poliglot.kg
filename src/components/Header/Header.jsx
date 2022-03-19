import React from "react";
import style from "./Header.module.scss";
import Logo from "../../assets/new/logo.png";
import Image from "next/image";
import { MainMenu } from "./Menu/MainMenu";
import { motion } from "framer-motion"
const Header = ({ inView }) => {
  return (
    <header
      className={`${style.mainHeader} ${inView ? style.mainHeaderBlack : style.mainHeaderWhite
        }`}
    >
      <div className={`container`}>
        < motion.div className={style.header}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <div className={style.logo}>
            <Image width={75} height={75} src={Logo} className={style.logo_image} />
            <h2>Ta Trains Inc</h2>
          </div>
          <MainMenu />
        </ motion.div>
      </div>
    </header>
  );
};

export default Header;
