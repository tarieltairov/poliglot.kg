import React from "react";
import style from "./Hero.module.scss";
import { motion } from "framer-motion"
const Hero = ({ ref }) => {
  return (
    <>
      <div ref={ref} id={"home"} className={style.home}>
        <div className={style.main}>
          <motion.div className={style.content}
            initial='hidden'
            whileInView='visible'
            transition={{ duration: 0.7 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <h1>
              Ta Trains Inc

            </h1>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam inventore adipisci ratione fugit, asperiores assumenda. Dignissimos velit, quia accusantium fuga asperiores voluptates autem hic dolor iste, quasi in laudantium quaerat.</h4>
          </motion.div>
        </div>
        <div className={style.videoWrapper}>
          <div className={style.videoBgHolder}>
            <video autoPlay loop muted>
              <source src="/vid.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
