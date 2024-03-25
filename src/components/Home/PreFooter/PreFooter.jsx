import { motion } from "framer-motion";
import React from "react";
import style from "./PreFooter.module.scss";

const PreFooter = () => {
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
          Давайте работать вместе
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
          Мы можем достичь истины
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
            Связаться
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default PreFooter;
