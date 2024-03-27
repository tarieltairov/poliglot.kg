import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const variants = {
  open: {
    zIndex: 9,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    zIndex: -10,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const menuVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 500, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 500 },
    },
  },
};

export const Navigation = ({ toggle }) => {
  const { t } = useTranslation();
  const menuItems = [
    {
      id: "mainMenuItem-1",
      title: t("header.navbar.home"),
      link: "/",
    },
    {
      id: "mainMenuItem-2",
      title: t("header.navbar.about"),
      link: "/#about",
    },
    {
      id: "mainMenuItem-3",
      title: t("header.navbar.services"),
      link: "/#services",
    },
    {
      id: "mainMenuItem-4",
      title: t("header.navbar.advantages"),
      link: "/#advantages",
    },
    {
      id: "mainMenuItem-5",
      title: t("header.navbar.reviews"),
      link: "/#clients",
    },
    {
      id: "mainMenuItem-6",
      title: t("header.navbar.contacts"),
      link: "/#contacts",
    },
  ];

  return (
    <motion.ul variants={variants}>
      {menuItems.map(({ id, title, link }) => (
        <motion.li
          variants={menuVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggle}
          key={id}
        >
          <Link href={link}>{title}</Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};
