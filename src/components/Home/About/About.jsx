import React, { useEffect, useState } from "react";
import style from "./About.module.scss";
import BoltIcon from "../../../assets/svg/Icon-bolt.svg";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import ContentHeadTitle from "../../components/ContentHeadTitlte/ContentHeadTitle";
import truck1 from "../../../assets/new/truck1.jpg"
import truck2 from "../../../assets/new/truck2.jpg"
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const About = () => {
  const [open, setOpen] = useState(false);
  const isLaptop = useMediaQuery({ query: "(max-width: 992px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('')
  useEffect(() => {
    getText1()
  }, [])
  async function getText1() {
    try {
      let res = await axios.get("https://kanatik6.pythonanywhere.com/message/about_us/")
      setText(res.data[0])
    } catch (e) {
      console.log(e)
    }
  }
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const animate = open
    ? {
      position: "fixed",
      width: isMobile ? "95%" : "80vw",
      height: "70vh",
      clipPath: "none",
      padding: "40px 5px",
    }
    : {
      position: "absolute",
      height: `${isMobile ? "348px" : isLaptop ? "552px" : "512px"}`,
      width: `${isMobile ? "320px" : isLaptop ? "508px" : "470px"}`,
      clipPath: "polygon(50% 0, 100% 24%, 100% 76%, 50% 100%, 0 76%, 0 24%)",
    };

  const animateShadow = open
    ? {
      position: "fixed",
      width: "100vw",
      height: "100vh",
      borderRadius: "0%",
      background: "rgba(0, 0, 0, 0.5)",
      zIndex: 13,
    }
    : {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: "transparent",
    };

  return (
    <div className={style.main}>
      <div id={"about"} className="container">
        <div className={style.block}>
          <div className={style.firstBlock}>

            <div

              initial='hidden'
              whileInView='visible'
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }} className={style.heading}>
              <ContentHeadTitle title={"ABOUT US"} />
            </div>
            <div className={style.content}>

              <h4

                initial='hidden'
                whileInView='visible'
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >

                {text.title}
              </h4>
              <div className={style.contentBlock}

                initial='hidden'
                whileInView='visible'
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -100 },
                }}
              >
                <Image src={BoltIcon} />
                <p>
                  {text.descriptions}
                </p>

              </div>
              <div className={style.contentBlock}

                initial='hidden'
                whileInView='visible'
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 100 },
                }}>
                <Image src={BoltIcon} />
                <p>

                  {text.descriptions2}
                  </p>
              </div>

            </div>
            <div className={style.buttons}>
              <a href="/#contacts">
                <button>Contact Us</button>
              </a>
            </div>
          </div>

          <div animate={animateShadow} className={style.shadow} />
          <div
            initial='hidden'
            whileInView='visible'
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 100 },
            }}>


            <Carousel activeIndex={index} onSelect={handleSelect} className={style.slider}>
              <Carousel.Item>
                <Image src={truck1} width={900} height={600} />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={truck2} width={900} height={600} />
              </Carousel.Item>
            </Carousel>

          </div>


        </div>
      </div>
    </div>
  );
};

export default About;
