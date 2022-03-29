import React from "react";
import style from "./Footer.module.scss";
import Insta from "../../assets/new/insta.png"
import Image from "next/image";
import facebook from "../../assets/new/facebook.png"
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.blocks}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -100 },
          }}
        >
          <div className={style.blockFooter}>
            <div className={style.logoBlock}>
              <h2>Ta Trans Inc</h2>
            </div>
            <p>
              No road is long whith good company
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
            <a href="mailto:hiring@tatransinc.com">hiring@tatransinc.com</a>
            <a href="tel:773-435-9283">
              773-435-9283
            </a>
            <p>
              701 Lee St Suite 460, <br /> Des Plaines, IL 60016
            </p>
            <div className={style.socialMedia}>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://instagram.com/tatransinc?utm_medium=copy_link"
              >
                <Image src={Insta} width={50} height={50} />
              </a>
              <a style={{marginTop: "3px"}} href="https://www.facebook.com/TA-Trans-Inc-100493832503315/">
                <Image src={facebook} width={40} height={40}/>
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
