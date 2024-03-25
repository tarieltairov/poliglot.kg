import React from "react";
import style from "./Services.module.scss";
import ContentHeadTitle from "../../components/ContentHeadTitlte/ContentHeadTitle";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div id={"services"} className={style.services}>
      <div className="container">
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
          <ContentHeadTitle title={"МОИ УСЛУГИ"} centered />
        </motion.div>
        <div className={style.blocks} initial="hidden">
          <motion.div
            className={`${style.block}`}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.3 }}
            variants={{
              visible: { scale: 1 },
              hidden: { scale: 0 },
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={style.sqStroke}
                d="M29.3145 15.9716C29.6157 12.9382 29.6159 11.2722 29.3145 8.37134C26.4136 8.06991 24.7476 8.07008 21.7142 8.37134"
                strokeWidth="4.48321"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className={style.sqStroke}
                d="M29.3042 8.40991L17.1429 20.5714L12.5714 16L2.28571 26.2857"
                strokeWidth="3.9313"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <h2 style={{ marginTop: "40px" }}>
              Проверка сотрудников - (кадровый скрининг)
            </h2>

            <p>
              - Подбор и отбор кадров при приеме на работу в государственных
              учреждениях и частных компаниях на выявление негативных факторов
              риска кандидатов. <br />
              <br />
              - Внутрикадровая проверка действующих сотрудников, государственных
              учреждений и частных компаний на выявление факторов риска,
              связанных с хищением, коррупцией и слива информации. <br />
              <br />- Помощь в служебных расследованиях на выявление
              причастности к нарушениям должностных обязанностей и инструкций
              сотрудников государственных учреждений и частных компаний.
            </p>
          </motion.div>
          <motion.div
            className={`${style.block}`}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.3 }}
            variants={{
              visible: { scale: 1 },
              hidden: { scale: 0 },
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={style.sqStroke}
                d="M29.3145 15.9716C29.6157 12.9382 29.6159 11.2722 29.3145 8.37134C26.4136 8.06991 24.7476 8.07008 21.7142 8.37134"
                strokeWidth="4.48321"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className={style.sqStroke}
                d="M29.3042 8.40991L17.1429 20.5714L12.5714 16L2.28571 26.2857"
                strokeWidth="3.9313"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <h2 style={{ marginTop: "40px" }}>
              Помощь в расследовании преступлений и принятии решений
            </h2>

            <p>
              - Помощь в раскрытии преступлений на определение причастности или
              непричастности лица к совершенному преступлению. <br />
              <br /> - Определение причастности или непричастности обвиняемого
              лица к совершенному преступлению на стадии судебного
              разбирательства.
            </p>
          </motion.div>
        </div>
        <motion.div
          className={style.miniBlocks}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 200 },
          }}
        >
          <div className={style.miniBlock}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={style.sqStroke}
                d="M29.3145 15.9716C29.6157 12.9382 29.6159 11.2722 29.3145 8.37134C26.4136 8.06991 24.7476 8.07008 21.7142 8.37134"
                strokeWidth="4.48321"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className={style.sqStroke}
                d="M29.3042 8.40991L17.1429 20.5714L12.5714 16L2.28571 26.2857"
                strokeWidth="3.9313"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h2>Супружеские измены</h2>
            <p>
              - Проверка наличия или отсутствия супружеских измен, при сомнениях
              и подозрениях друг к другу супружеских пар.
            </p>
          </div>
          <div className={`${style.miniBlock}`}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={style.sqStroke}
                d="M29.3145 15.9716C29.6157 12.9382 29.6159 11.2722 29.3145 8.37134C26.4136 8.06991 24.7476 8.07008 21.7142 8.37134"
                strokeWidth="4.48321"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className={style.sqStroke}
                d="M29.3042 8.40991L17.1429 20.5714L12.5714 16L2.28571 26.2857"
                strokeWidth="3.9313"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h2>Персонал</h2>
            <p>
              - Проверка нянь, домашнего и технического персонала как при приеме
              на работу, так и входе работы на их добросовестность и
              порядочность.
            </p>
          </div>
          <div className={style.miniBlock}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={style.sqStroke}
                d="M29.3145 15.9716C29.6157 12.9382 29.6159 11.2722 29.3145 8.37134C26.4136 8.06991 24.7476 8.07008 21.7142 8.37134"
                strokeWidth="4.48321"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className={style.sqStroke}
                d="M29.3042 8.40991L17.1429 20.5714L12.5714 16L2.28571 26.2857"
                strokeWidth="3.9313"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h2>И другие темы</h2>
            <p>- Можно сделать проверку на другие различные темы</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
