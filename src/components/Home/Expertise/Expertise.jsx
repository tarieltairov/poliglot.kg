import React from "react";
import ContentHeadTitle from "../../components/ContentHeadTitlte/ContentHeadTitle";
import classes from "./Expertise.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import KG from "../../../assets/poliglot/kyrgyzstan1.png";
import machine from "../../../assets/poliglot/machine.png";
import { useTranslation } from "next-i18next";

function Expertise() {
  const { t } = useTranslation();
  const cards = [
    {
      icon: KG,
      title: t("advantages.card1.cardTitle"),
      description: t("advantages.card1.cardDesc"),
    },
    {
      icon: machine,
      title: t("advantages.card2.cardTitle"),
      description: t("advantages.card2.cardDesc"),
    },
  ];

  return (
    <div id={"advantages"} className="container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className={classes.heading}
      >
        <ContentHeadTitle title={t("advantages.title")} centered />
      </motion.div>
      <div className={classes.card_section}>
        {cards.map((card, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className={classes.first_card}
            key={index}
          >
            <div className={classes.image_block}>
              <Image src={card.icon} />
            </div>
            <h2>{card.title}</h2>
            <p className={classes.footer_text}>{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Expertise;
