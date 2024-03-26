import React from "react";
import style from "./Footer.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../../assets/poliglot/snapedit_1711026401124 (1) (1).png";
import whatsapp from "../../assets/poliglot/WhatsApp_icon.png";

const Footer = () => {
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
            <p>
              Полиграф – Ваш надёжный компас <br /> в достижении правды
            </p>
          </div>
          <div className={style.blockFooter}>
            <h3>Страницы</h3>
            <a href="/#">Главная</a>
            <a href="/#about">Обо мне</a>
            <a href="/#services">Услуги</a>
            <a href="/#advantages">Преимущества</a>
            <a href="/#contacts">Контакты</a>
            <a href="/#clients">Отзывы</a>
          </div>
          <div className={style.blockFooter}>
            <h3>Контакты</h3>
            <a href="mailto:poligraph-bishkek@mail.ru">
              poligraph-bishkek@mail.ru
            </a>
            <a href="tel:+996995696932">+996 995 696 932</a>
            <a href="tel:+996500100045">+996 500 100 045</a>
            <a target="_blank" href="https://www.google.com/maps/place/Bishkek">
              Город Бишкек
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
