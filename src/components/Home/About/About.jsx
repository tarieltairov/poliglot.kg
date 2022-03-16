import React, { useEffect, useState } from "react";
import style from "./About.module.scss";
import BoltIcon from "../../../assets/svg/Icon-bolt.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import MediaQuery, { useMediaQuery } from "react-responsive";
import ContentHeadTitle from "../../components/ContentHeadTitlte/ContentHeadTitle";
import ArrowLeft from '../../../assets/svg/Icon-leftArrow.svg';
import ArrowRight from '../../../assets/svg/Icon-rightArrow.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import truck1 from "../../../assets/new/truck1.jpg"
import truck2 from "../../../assets/new/truck2.jpg"
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  const [open, setOpen] = useState(false);
  const isLaptop = useMediaQuery({ query: "(max-width: 992px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [index, setIndex] = useState(0);

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
            <div className={style.heading}>
              <ContentHeadTitle title={"ABOUT US"} />
            </div>
            <div className={style.content}>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi velit suscipit error est magnam, modi unde corrupti ullam numquam odio, quos ipsum sunt itaque sit magni aspernatur esse quisquam dicta!
              </h4>
              <div className={style.contentBlock}>
                <Image src={BoltIcon} />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias natus id nulla quibusdam perspiciatis voluptates dicta unde eveniet adipisci repellat, esse, harum sint doloribus voluptate incidunt commodi, facere nostrum assumenda.
                </p>
              </div>
              <div className={style.contentBlock}>
                <Image src={BoltIcon} />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, repellendus sit aperiam iure, dolore impedit eius ullam cumque tempora incidunt sunt libero expedita, fuga voluptas fugiat? Distinctio, dolore odio. Quasi.
                </p>
              </div>
            </div>
            <div className={style.buttons}>
              <a href="/#contacts">
                <button>Contact Us</button>
              </a>
              <div className={style.watchArrow}>
                <MediaQuery minWidth={1200}>
                  <svg
                    width="225"
                    height="43"
                    viewBox="0 0 225 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M104 42L104 43L104 42ZM224.197 3.27534C224.715 3.46772 224.978 4.04335 224.786 4.56104L221.651 12.9974C221.459 13.5151 220.883 13.7788 220.365 13.5864C219.848 13.394 219.584 12.8184 219.776 12.3007L222.563 4.80175L215.064 2.01508C214.546 1.82271 214.283 1.24708 214.475 0.729382C214.667 0.211685 215.243 -0.0520339 215.761 0.140343L224.197 3.27534ZM0.500014 23C0.821309 22.0531 0.821403 22.0531 0.821711 22.0532C0.822097 22.0533 0.822617 22.0535 0.82339 22.0538C0.824935 22.0543 0.827331 22.0551 0.830572 22.0562C0.837057 22.0584 0.846926 22.0617 0.86015 22.0662C0.886598 22.0751 0.926466 22.0885 0.979506 22.1062C1.08559 22.1417 1.24436 22.1946 1.45386 22.2638C1.87285 22.402 2.49472 22.6052 3.30373 22.864C4.92177 23.3816 7.28821 24.1217 10.2771 25.0102C16.2554 26.7873 24.7217 29.1573 34.6693 31.5272C54.5771 36.2701 80.3644 40.9999 104 41L104 43C80.1356 42.9999 54.1729 38.2298 34.2057 33.4727C24.2158 31.0927 15.7134 28.7127 9.70726 26.9273C6.704 26.0346 4.32435 25.2903 2.69435 24.7689C1.87933 24.5082 1.25169 24.3031 0.827179 24.163C0.614921 24.093 0.453442 24.0392 0.344711 24.0028C0.290345 23.9846 0.249165 23.9708 0.221418 23.9614C0.207545 23.9568 0.197029 23.9532 0.189902 23.9508C0.186339 23.9496 0.183623 23.9487 0.181758 23.948C0.180826 23.9477 0.180066 23.9475 0.179599 23.9473C0.179053 23.9471 0.17872 23.947 0.500014 23ZM104 41C113.206 41 125.263 38.6674 138.229 35.131C151.176 31.5993 164.958 26.8871 177.588 22.1696C190.216 17.4528 201.679 12.7355 209.986 9.19696C214.139 7.42787 217.502 5.95382 219.826 4.92235C220.988 4.40662 221.891 4.00156 222.502 3.72561C222.808 3.58764 223.041 3.48194 223.197 3.41084C223.275 3.37529 223.334 3.34838 223.374 3.33041C223.393 3.32142 223.408 3.31467 223.418 3.31018C223.423 3.30794 223.426 3.30627 223.429 3.30517C223.43 3.30462 223.431 3.30422 223.431 3.30394C223.432 3.30369 223.432 3.30358 223.849 4.21271C224.265 5.12184 224.265 5.12202 224.264 5.12234C224.263 5.12264 224.262 5.12311 224.261 5.12371C224.259 5.1249 224.255 5.12667 224.25 5.129C224.239 5.13367 224.224 5.14062 224.204 5.14979C224.164 5.16815 224.104 5.19544 224.025 5.23138C223.867 5.30327 223.632 5.40976 223.325 5.54855C222.71 5.82612 221.804 6.2329 220.637 6.75042C218.305 7.78544 214.933 9.26352 210.769 11.037C202.444 14.5836 190.951 19.313 178.288 24.0431C165.627 28.7725 151.782 33.507 138.755 37.0605C125.745 40.6091 113.479 43 104 43L104 41Z"
                      fill="orangered"
                    />
                  </svg>
                </MediaQuery>
              </div>
            </div>
          </div>
          <motion.div animate={animateShadow} className={style.shadow} />

          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <Image src={truck1} />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={truck2} />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

        </div>
      </div>
    </div>
  );
};

export default About;
