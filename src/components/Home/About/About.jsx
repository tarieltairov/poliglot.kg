import React, { useEffect, useState } from "react";
import style from "./About.module.scss";
import BoltIcon from "../../../assets/svg/Icon-bolt.svg";
import PlayIcon from "../../../assets/svg/Icon-Play.svg";
import CloseIcon from "../../../assets/svg/Icon-Close.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import MediaQuery, { useMediaQuery } from "react-responsive";
import ContentHeadTitle from "../../components/ContentHeadTitlte/ContentHeadTitle";
import ReactPlayer from "react-player";

const About = () => {
  const [open, setOpen] = useState(false);
  const isLaptop = useMediaQuery({ query: "(max-width: 992px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

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
                ZettaSoft IO automates, optimizes your business processes and
                engineers your startup ideas into the MVP.
              </h4>
              <div className={style.contentBlock}>
                <Image src={BoltIcon} />
                <p>
                  ZettaSoft collaborates with companies of all sizes, acting as
                  a reliable partner in software and platform development,
                  consultations, and product systems support services.{" "}
                </p>
              </div>
              <div className={style.contentBlock}>
                <Image src={BoltIcon} />
                <p>
                  {" "}
                  We create unique experiences and IT solutions for your
                  business to help you continuously exceed your customers’
                  expectations.{" "}
                </p>
              </div>
            </div>
            <div className={style.buttons}>
              <a href="/#contacts">
                <button>Contact Us</button>
              </a>
              <div onClick={() => setOpen(true)} className={style.watch}>
                <Image height={52} width={58} src={PlayIcon} />
                <span>Watch video</span>
              </div>
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
                      fill="#3A39C0"
                    />
                  </svg>
                </MediaQuery>

                <MediaQuery maxWidth={1200}>
                  <svg
                    width="22"
                    height="69"
                    viewBox="0 0 22 69"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.1305 33.0293L21.1212 33.1653L20.1305 33.0293ZM2.78203 67.858C2.90222 68.397 3.43663 68.7366 3.97568 68.6164L12.76 66.6579C13.299 66.5377 13.6386 66.0033 13.5184 65.4642C13.3982 64.9252 12.8638 64.5856 12.3248 64.7058L4.51649 66.4467L2.77558 58.6384C2.6554 58.0994 2.12098 57.7598 1.58194 57.88C1.04289 58.0002 0.70333 58.5346 0.823514 59.0737L2.78203 67.858ZM18.6841 1.00016C17.7022 1.18968 17.7022 1.18962 17.7022 1.18963C17.7022 1.18972 17.7022 1.1898 17.7023 1.18999C17.7023 1.19036 17.7025 1.191 17.7026 1.19191C17.703 1.19373 17.7035 1.19661 17.7043 1.20055C17.7058 1.20844 17.7081 1.22056 17.7112 1.23682C17.7173 1.26936 17.7265 1.3185 17.7385 1.38361C17.7625 1.51383 17.7977 1.70789 17.8419 1.96065C17.9304 2.46621 18.0549 3.20646 18.1985 4.14035C18.4856 6.00857 18.8484 8.64947 19.1501 11.7353C19.7548 17.92 20.1084 25.8377 19.1398 32.8933L21.1212 33.1653C22.1209 25.8829 21.7513 17.786 21.1407 11.5407C20.8347 8.41144 20.4668 5.73344 20.1753 3.8365C20.0294 2.88782 19.9026 2.13393 19.812 1.616C19.7667 1.35702 19.7304 1.15699 19.7054 1.02106C19.6929 0.953094 19.6831 0.901147 19.6765 0.865864C19.6731 0.848222 19.6706 0.834745 19.6688 0.825514C19.6679 0.820898 19.6672 0.817344 19.6668 0.814861C19.6665 0.81362 19.6663 0.812647 19.6662 0.811942C19.6661 0.81159 19.6661 0.811264 19.666 0.811088C19.666 0.810829 19.666 0.810638 18.6841 1.00016ZM19.1398 32.8933C18.7713 35.578 17.5975 39.052 15.999 42.8042C14.4078 46.5397 12.4249 50.4844 10.4831 54.0909C8.54241 57.6954 6.64896 60.9507 5.24035 63.3053C4.53624 64.4823 3.95375 65.4334 3.54768 66.0897C3.34466 66.4178 3.18577 66.6721 3.07787 66.8441C3.02393 66.9301 2.98272 66.9954 2.95513 67.0391C2.94134 67.061 2.93094 67.0774 2.92405 67.0883C2.92061 67.0937 2.91805 67.0977 2.91637 67.1004C2.91553 67.1017 2.91492 67.1027 2.91453 67.1033C2.91433 67.1036 2.91421 67.1038 2.91411 67.104C2.91404 67.1041 2.91403 67.1041 3.75807 67.6404C4.60211 68.1766 4.60221 68.1765 4.60237 68.1762C4.60249 68.176 4.60271 68.1757 4.60296 68.1753C4.60347 68.1745 4.60421 68.1733 4.60517 68.1718C4.60709 68.1688 4.60989 68.1644 4.61358 68.1585C4.62096 68.1469 4.63185 68.1297 4.64615 68.107C4.67475 68.0618 4.71698 67.9948 4.77198 67.9071C4.88198 67.7318 5.04309 67.4739 5.24844 67.142C5.65911 66.4783 6.24684 65.5186 6.95667 64.3321C8.37594 61.9596 10.2853 58.6772 12.2441 55.039C14.2019 51.4027 16.2153 47.3997 17.8391 43.5881C19.4556 39.7932 20.7155 36.1208 21.1212 33.1653L19.1398 32.8933Z"
                      fill="#3A39C0"
                    />
                  </svg>
                </MediaQuery>
              </div>
            </div>
          </div>
          <motion.div animate={animateShadow} className={style.shadow} />
          <div style={{ zIndex: open ? 13 : 1 }} className={style.secondBlock}>
            <motion.div
              animate={animate}
              initial={open}
              style={{ backgroundImage: !open ? `url('/Video.png')` : "none" }}
              className={`${style.play}`}
            >
              {open ? (
                <div className={style.videoWrapper}>
                  <ReactPlayer
                    width="100%"
                    height="100%"
                    controls={true}
                    url="/final_promo.mp4"
                  />
                  <div
                    onClick={() => setOpen(false)}
                    className={style.closeIcon}
                  >
                    <Image src={CloseIcon} />
                  </div>
                </div>
              ) : (
                <div onClick={() => setOpen(true)} className={style.play_icon}>
                  <Image src={PlayIcon} />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
