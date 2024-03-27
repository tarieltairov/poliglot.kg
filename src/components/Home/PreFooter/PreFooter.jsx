import { motion } from "framer-motion";
import React from "react";
import style from "./PreFooter.module.scss";
import { useTranslation } from "next-i18next";

const PreFooter = () => {
  const { t } = useTranslation();

  return (
    <div className={style.preFooter}>
      <div className={style.whiteBlock}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          {t("preFooter.title")}
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          {t("preFooter.text")}
        </motion.p>
        <a href="/#contacts">
          <motion.button
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            {t("preFooter.btnText")}
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default PreFooter;
