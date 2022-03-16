import React from "react";
import style from "./Footer.module.scss";
import Logo from "../../assets/svg/logo.svg";
import LinkedinIcon from "../../assets/svg/Icon-Linkedin.svg";
import BehanceIcon from "../../assets/svg/Icon-behance.svg";
import ClutchIcon from "../../assets/svg/Icon-Clutch.svg";
import UpWorkIcon from "../../assets/svg/Icon-Upwork.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.blocks}>
          <div className={style.blockFooter}>
            <div className={style.logoBlock}>
              <Image width={33} height={36} src={Logo} />
              <h2>ttttttttt</h2>
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
            <h3>Services</h3>
            <a href="/">Web Platform</a>
            <a href="/">Mobile Apps</a>
            <a href="/#about">About Us</a>
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
                href="https://www.linkedin.com/company/zettasoft/"
              >
                <Image src={LinkedinIcon} />
              </a>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://www.behance.net/?tracking_source=typeahead_search_direct&search=zettasoft"
              >
                <Image src={BehanceIcon} />
              </a>
            </div>
            <div className={style.social}>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://clutch.co/profile/zettasoft-io"
              >
                <Image src={ClutchIcon} />
              </a>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://www.upwork.com/agencies/~01112f88a7f260f6aa"
              >
                <Image src={UpWorkIcon} />
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
