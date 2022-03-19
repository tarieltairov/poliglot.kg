import React from "react";
import style from "./Footer.module.scss";
import Lofo from "../../assets/new/logo.png"
import Insta from "../../assets/new/insta.png"
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.blocks}>
          <div className={style.blockFooter}>
            <div className={style.logoBlock}>
              <Image width={33} height={36} src={Lofo} />
              <h2>Ta Trains Inc</h2>
            </div>
            <p>
              We offer innovative solutions <br />
              for your actual problems
            </p>
          </div>
          <div className={style.blockFooter}>
            <h3>Pages</h3>
            <a href="/#about">About</a>
            <a href="/#services">Services</a>
            <a href="/#contacts">Contacts</a>
            <a href="/#solutions">Solutions</a>
          </div>
          <div className={style.blockFooter}>
            <h3>Contacts</h3>
            <a href="mailto: hello@zettasoft.io">lorem</a>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.google.com/maps/place/Bishkek"
            >
              Central Asia
            </a>
            <div className={style.socialMedia}>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://www.instagram.com/"
              >
                <Image src={Insta} width={50} height={50}/>
              </a>
            </div>
          </div>
        </div>
        <div className={style.footerHr} />
        <div className={style.footerText}>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
