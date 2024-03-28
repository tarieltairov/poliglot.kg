import * as React from "react";
import { useEffect, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import Image from "next/image";
import WhatsApp from "../../../assets/poliglot/WhatsApp_icon.png";

const footerVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 500, velocity: -100 },
    },
    zIndex: 9,
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 500 },
    },
  },
};

export const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};

export const MainMenu = ({ setIsBurgerOpen }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 88.5% 30px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: `circle(0px at 88.5% 30px)`,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  useEffect(() => {
    setIsBurgerOpen(isOpen);
  }, [isOpen]);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={`main-layout-menu ${isOpen ? "openModal" : "closeModal"}`}
    >
      <MenuToggle toggle={() => toggleOpen()} />
      <div className="pointerBlocker">
        <motion.div className="background" variants={sidebar} />
        <Navigation toggle={() => toggleOpen()} />
        <motion.div className="mainMenuFooterWrapper" variants={footerVariants}>
          <div className="socials">
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://wa.me/+996995696932"
            >
              <Image
                src={WhatsApp}
                width={50}
                height={50}
                className="insta"
                alt="WhatsApp"
              />
            </a>

            <a
              rel="noreferrer noopener"
              href="/"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <h3>Полиграф-Бишкек</h3>
            </a>
          </div>

          <div className="last">
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="mailto:poligraph-bishkek@mail.ru"
              style={{ color: "white" }}
            >
              poligraph-bishkek@mail.ru
            </a>
            <a
              style={{ color: "white" }}
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.google.com/maps/place/Bishkek"
            >
              Bishkek
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};
