import React, { useState } from "react";
import style from "./Header.module.scss";
import { MainMenu } from "./Menu/MainMenu";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/svg/logo.svg";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Header = ({ inView }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const onLangChange = (e) => {
    const selectedLang = e.target.value;
    router.push("/", undefined, { locale: selectedLang });
  };

  return (
    <header
      className={`${style.mainHeader} ${
        isBurgerOpen
          ? style.mainHeaderWhite
          : inView
          ? style.mainHeaderBlack
          : style.mainHeaderWhite
      }`}
    >
      <div>
        <div className={style.header}>
          <div className={style.logo}>
            <Link href="/">
              <Image src={logo} height={90} alt="logo" />
            </Link>
            <div className={style.locale}>
              {t("header.navbar.lang")}:
              <select onChange={onLangChange} value={router.locale}>
                <option value="ru">Русский</option>
                <option value="kg">Кыргызча</option>
              </select>
            </div>
          </div>

          <div className={style.links}>
            <Link href="/">
              <p>{t("header.navbar.home")}</p>
            </Link>
            <Link href="/#about">
              <p>{t("header.navbar.about")}</p>
            </Link>
            <Link href="/#services">
              <p>{t("header.navbar.services")}</p>
            </Link>
            <Link href="/#advantages">
              <p>{t("header.navbar.advantages")}</p>
            </Link>
            <Link href="/#clients">
              <p>{t("header.navbar.reviews")}</p>
            </Link>
            <Link href="/#contacts">
              <button className={style.button}>
                {t("header.navbar.contacts")}
              </button>
            </Link>
          </div>
          <div className={style.burger}>
            <MainMenu setIsBurgerOpen={setIsBurgerOpen} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
