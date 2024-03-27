import React from "react";
import style from "./solutions.module.scss";
import DottedSqIcon from "../../../assets/svg/Icon-dottedSQ.svg";
import Image from "next/image";
import ContentHeadTitle from "../../components/ContentHeadTitlte/ContentHeadTitle";
import { motion } from "framer-motion";
import whatsapp from "../../../assets/poliglot/whatsapp.png";
import phone from "../../../assets/poliglot/phone.png";
import mail from "../../../assets/poliglot/mail.png";
import { useTranslation } from "next-i18next";

const Solutions = () => {
  const { t } = useTranslation();
  const links = [
    {
      text: "+996 995 696 932",
      icon: whatsapp,
      link: "https://wa.me/+996995696932",
    },
    {
      text: "+996 500 100 045",
      icon: phone,
      link: "tel:+996500100045",
    },
    {
      text: "poligraph-bishkek@mail.ru",
      icon: mail,
      link: "mailto:poligraph-bishkek@mail.ru",
    },
    {
      text: "+996 995 696 932",
      icon: phone,
      link: "tel:+996 995 696 932",
    },
  ];

  return (
    <div id={"contacts"} className="container">
      <div className={style.solutions}>
        <motion.div
          className={style.heading}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <ContentHeadTitle title={t("contacts.title")} centered />
        </motion.div>
        <motion.div
          id="contacts"
          className={style.projectBlock}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <div className={style.titleBlock}>
            {links.map((item, index) => (
              <a href={item.link} key={index}>
                <Image src={item.icon} />
                {item.text}
              </a>
            ))}
          </div>
          <div className={style.rightDotted}>
            <Image src={DottedSqIcon} />
          </div>
          <div className={style.leftDotted}>
            <Image src={DottedSqIcon} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Solutions;
