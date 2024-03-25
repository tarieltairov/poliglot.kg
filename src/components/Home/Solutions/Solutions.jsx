import React from "react";
import style from "./solutions.module.scss";
import DottedSqIcon from "../../../assets/svg/Icon-dottedSQ.svg";
import Image from "next/image";
import ContentHeadTitle from "../../components/ContentHeadTitlte/ContentHeadTitle";
import { motion } from "framer-motion";

const Solutions = () => {
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
          <ContentHeadTitle title={"СВЯЗАТЬСЯ СО МНОЙ"} centered />
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
            <h2>Apply now</h2>
            <p>Let’s contact with us!</p>
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
