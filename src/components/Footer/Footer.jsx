import React from "react";
import style from "./Footer.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../../assets/poliglot/snapedit_1711026401124 (1) (1).png";
import whatsapp from "../../assets/poliglot/WhatsApp_icon.png";
import { useTranslation } from "next-i18next";
import replaceBr from "../../helpers/helper";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={style.footer}>
      <div className="container">
        <motion.div
          className={style.blocks}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <div className={style.blockFooter}>
            <div className={style.logoBlock}>
              <Image src={logo} />
            </div>
            <p
              dangerouslySetInnerHTML={{ __html: replaceBr(t("footer.text")) }}
            ></p>
          </div>
          <div className={style.blockFooter}>
            <h3>{t("footer.pages")}</h3>
            <a href="/#">{t("header.navbar.home")}</a>
            <a href="/#about">{t("header.navbar.about")}</a>
            <a href="/#services">{t("header.navbar.services")}</a>
            <a href="/#advantages">{t("header.navbar.advantages")}</a>
            <a href="/#contacts">{t("header.navbar.contacts")}</a>
            <a href="/#clients">{t("header.navbar.reviews")}</a>
          </div>
          <div className={style.blockFooter}>
            <h3>{t("header.navbar.contacts")}</h3>
            <a href="mailto:poligraph-bishkek@mail.ru">
              poligraph-bishkek@mail.ru
            </a>
            <a href="tel:+996995696932">+996 995 696 932</a>
            <a href="tel:+996500100045">+996 500 100 045</a>
            <a target="_blank" href="https://www.google.com/maps/place/Bishkek">
              {t("footer.city")}
            </a>
            <div className={style.socialMedia}>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://wa.me/+996995696932"
              >
                <Image src={whatsapp} width={50} height={50} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
