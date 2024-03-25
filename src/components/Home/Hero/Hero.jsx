import { Carousel } from "react-bootstrap";
import React, { useState } from "react";
import style from "./Hero.module.scss";
import Link from "next/link";
import Image from "next/image";
import ft from "../../../assets/poliglot/about-first.png";
import ft2 from "../../../assets/poliglot/about-second.png";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const images = [ft, ft2];

  return (
    <div className={style.hh}>
      <div className={style.toto}>
        <h1>title</h1>
        <p>
          descriptions - Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Incidunt, commodi?
        </p>
        <Link href="/#contacts">
          <button>Связаться сейчас</button>
        </Link>
      </div>
      <Carousel
        activeIndex={index}
        onSelect={setIndex}
        className={style.slider}
      >
        {images.map((img) => (
          <Carousel.Item className={style.lol}>
            <Image src={img} className={style.img} />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
