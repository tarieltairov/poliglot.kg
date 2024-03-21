import { Carousel } from "react-bootstrap";
import React, { useState } from "react";
import style from "./Hero.module.scss";
import Link from "next/link"
import Image from "next/image";
import ft from "../../../assets/new/ft.jpg"
import ft2 from "../../../assets/new/ft2.jpg"
import truck1 from "../../../assets/new/truck1.jpg"

const Hero = () => {
  const [index, setIndex] = useState(0);
  return (

    <div className={style.hh}>
      <div className={style.toto}>
        <h1>title</h1>
        <p>descriptions - Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, commodi?</p>
        <Link href="/#contacts">
          <button >
            Apply now
          </button>
        </Link>

      </div>
      <Carousel activeIndex={index} onSelect={setIndex} className={style.slider}>
        <Carousel.Item className={style.lol}>
          <Image src={truck1} className={style.img} />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={style.lol}>
          <Image src={ft} className={style.img} />
        </Carousel.Item>
        <Carousel.Item className={style.lol}>
          <Image src={ft2} className={style.img} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
