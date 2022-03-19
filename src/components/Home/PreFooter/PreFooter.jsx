import React from "react";
import style from "./PreFooter.module.scss";
import { motion } from "framer-motion"
const PreFooter = () => {
  return (
    <div className={style.preFooter}>
      <div className={style.whiteBlock}>
        <motion.h2
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >Let’s Work Together</motion.h2>
        <motion.p
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -100 },
          }}
        >
          Lorem ipsum dolor sit amet consectetur
        </motion.p>
        <a href="/#contacts">
          <motion.button
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -100 },
          }}
          >Contact Us</motion.button>
        </a>
      </div>
    </div>
  );
};

export default PreFooter;
