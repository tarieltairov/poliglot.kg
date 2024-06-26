import MainLayout from "../src/components/MainLayout/MainLayout";
import About from "../src/components/Home/About/About";
import Services from "../src/components/Home/Services/Services";
import Solutions from "../src/components/Home/Solutions/Solutions";
import Slider from "../src/components/Home/Slider/SliderBlock";
import PreFooter from "../src/components/Home/PreFooter/PreFooter";
import React from "react";
import Hero from "../src/components/Home/Hero/Hero";
import Expertice from "../src/components/Home/Expertise/Expertise";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Services />
      <Expertice />
      <Solutions />
      <Slider />
      <PreFooter />
    </MainLayout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Home;
