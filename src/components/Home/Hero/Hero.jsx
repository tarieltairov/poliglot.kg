import React from "react";
import style from "./Hero.module.scss";

const Hero = ({ ref }) => {
  return (
    <>
      <div ref={ref} id={"home"} className={style.home}>
        <div className={style.main}>
          <div className={style.content}>
            <h1>
              <span>Build</span>, scale and control your <span>business</span>{" "}
              with us!
            </h1>
            <h4>#We offer innovative solutions for your actual problems</h4>
          </div>
        </div>
        <div className={style.videoWrapper}>
          <div className={style.videoBgHolder}>
            <div/>
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
