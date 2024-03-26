import { Carousel } from "react-bootstrap";
import React, { useState } from "react";
import style from "./Hero.module.scss";
import Link from "next/link";
import Image from "next/image";
import ft from "../../../assets/poliglot/about-first.png";
import ft2 from "../../../assets/poliglot/about-second.png";
import dd from "../../../assets/poliglot/7SUp.gif";
const Hero = () => {
  const [index, setIndex] = useState(0);
  const images = [ft, ft2];

  return (
    <div className={style.hh}>
      <div className={style.toto}>
        <p>
          Ложь это намеренное, сознательное искажение или сокрытие истины
          человеком с целью введения в заблуждение отдельных людей или группы
          людей.
        </p>
        <Link href="/#contacts">
          <button>Связаться сейчас</button>
        </Link>
      </div>
      <Image src={dd} height={900} />
    </div>
  );
};

export default Hero;
