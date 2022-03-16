import React from "react";
import style from "./PreFooter.module.scss";

const PreFooter = () => {
  return (
    <div className={style.preFooter}>
      <div className={style.whiteBlock}>
        <h2>Let’s Work Together</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur
        </p>
        <a href="/#contacts">
          <button>Contact Us</button>
        </a>
      </div>
    </div>
  );
};

export default PreFooter;
