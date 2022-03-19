import { Carousel } from "react-bootstrap";
import React, { useState } from "react";
import style from "./Hero.module.scss";
import Image from "next/image";
import ft from "../../../assets/new/ft.jpg"
import ft2 from "../../../assets/new/ft2.jpg"
import truck1 from "../../../assets/new/truck1.jpg"
import axios from "axios";
const Hero = ({ ref }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  async function getText() {
    try {
      let res = await axios.get("https://kanatik6.pythonanywhere.com/admin/")
      console.log(res)
    } catch (error) {
      console.log(e)
    }
  }
  return (
    <div className={style.hh}>
      <div className={style.toto}>
        <h1>Your adventure starts here</h1>
        <p>Long-haul trucking that you can trust.</p>
        <button onClick={()=>getText()}>
          Apply now
        </button>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect} className={style.slider}>
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
