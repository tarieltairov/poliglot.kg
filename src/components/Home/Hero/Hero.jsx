import React from "react";
import style from "./Hero.module.scss";
import Link from "next/link";
import Image from "next/image";
import pulseGif from "../../../assets/poliglot/7SUp.gif";
import { useTranslation } from "next-i18next";
const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className={style.hh}>
      <div className={style.toto}>
        <h1>{t("hero.head")}</h1>
        <p>{t("hero.text")}</p>
        <Link href="/#contacts">
          <button>{t("hero.btnText")}</button>
        </Link>
      </div>
      <Image src={pulseGif} alt="main-image" />
    </div>
  );
};

export default Hero;
