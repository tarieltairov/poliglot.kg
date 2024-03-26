import React, { useState } from "react";
import style from "./About.module.scss";
import Image from "next/image";
import ContentHeadTitle from "../../components/ContentHeadTitlte/ContentHeadTitle";
import BoltIcon from "../../../assets/svg/Icon-bolt.svg";
import about1 from "../../../assets/poliglot/about-first.png";
import about2 from "../../../assets/poliglot/about-second.png";
import { Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  const [index, setIndex] = useState(0);
  const aboutText = [
    {
      text: "Добро пожаловать на мой сайт! Меня зовут Нурдин. Я являюсь специалистом в области полиграфии с 11-летним стажем работы в судебной системе и 12-летним стажем работы в следственных органах. Являюсь членом Государственной аттестационной комиссии Академии МВД Кыргызской Республики по гражданско-правовым дисциплинам и действующим адвокатом. Прежде чем заняться полиграфией, работал судьей и занимал различные руководящие должности в следственных органах, такие как начальник Следственного Управления, что позволило мне приобрести ценный опыт в области правопорядка и правосудия.",
    },
    {
      text: "Обладаю двумя высшими юридическими образованиями. Моя специализация в области полиграфии позволяет мне помогать людям достичь правдивости и объективности в различных ситуациях, используя современные методики и оборудования.",
    },
    {
      text: "Горжусь своей профессиональной репутацией и индивидуальным подходом к каждому клиенту. Моя цель - предоставить вам качественные услуги в области полиграфического анализа, помочь достичь ясности и понимания важных вопросов и ситуаций.",
    },
    {
      text: "Свяжитесь со мной, чтобы узнать больше о том, как мой анализ в полиграфии может быть полезной для вас. Готов помочь вам достичь долгожданных ответов и разрешить важные вопросы. Благодарю за доверие и интерес к моей работе!",
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
              <ContentHeadTitle title={"ОБО МНЕ"} />
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
                Специалист-полиграфолог
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
                  <Image src={BoltIcon} />
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
                <button>Связаться</button>
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
                <Image src={about1} width={900} height={600} />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={about2} width={900} height={600} />
              </Carousel.Item>
            </Carousel>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
