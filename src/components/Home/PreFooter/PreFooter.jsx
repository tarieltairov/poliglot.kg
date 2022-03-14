import React from "react";
import style from "./PreFooter.module.scss";

const PreFooter = () => {
  return (
    <div className={style.preFooter}>
      <div className={style.whiteBlock}>
        <h2>Let’s Work Together</h2>
        <p>
          We’re looking forward to discussing your projects and how we can help
          you!
        </p>
        <a href="/#contacts">
          <button>Contact Us</button>
        </a>
      </div>
    </div>
  );
};

export default PreFooter;
