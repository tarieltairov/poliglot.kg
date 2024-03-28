import React, { useState } from "react";
import style from "./About.module.scss";
import Image from "next/image";
import ContentHeadTitle from "../../components/ContentHeadTitlte/ContentHeadTitle";
import BoltIcon from "../../../assets/svg/Icon-bolt.svg";
import about1 from "../../../assets/poliglot/smallSize/about-first.png";
import about2 from "../../../assets/poliglot/smallSize/about-second.png";
import { Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "next-i18next";

const About = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const aboutText = [
    {
      text: t("about.desc1"),
    },
    {
      text: t("about.desc2"),
    },
    {
      text: t("about.desc3"),
    },
    {
      text: t("about.desc4"),
    },
  ];
  return (
    <div className={style.main}>
      <div id={"about"} className="container">
        <div className={style.block}>
          <div className={style.firstBlock}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className={style.heading}
            >
              <ContentHeadTitle title={t("about.title")} />
            </motion.div>
            <div className={style.content}>
              <motion.h4
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                {t("about.specialist")}
              </motion.h4>
              {aboutText.map((item, index) => (
                <motion.div
                  key={index}
                  className={style.contentBlock}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                >
                  <Image src={BoltIcon} alt="BoltIcon" />
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              variants={{
                visible: { scale: 1 },
                hidden: { scale: 0 },
              }}
              className={style.buttons}
            >
              <a href="/#contacts">
                <button>{t("about.btnText")}</button>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
              visible: { scale: 1 },
              hidden: { scale: 0 },
            }}
          >
            <Carousel
              activeIndex={index}
              onSelect={setIndex}
              className={style.slider}
            >
              <Carousel.Item>
                <Image src={about1} alt="about1" />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={about2} alt="about2" />
              </Carousel.Item>
            </Carousel>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
