import About from "@/component/section/About";
import ContactUs from "@/component/section/ContactUs";
import GetStarted from "@/component/section/GetStarted";
import HeroSection from "@/component/section/HeroSection";
import Process from "@/component/section/Process";
import Services from "@/component/section/Services";
import WhyChooseUs from "@/component/section/WhyChooseUs";
import Engagement from "@/component/section/Engagement"
import Header from "@/component/ui/Header";
import Footer from "@/component/ui/Footer";

import Image from "next/image";
import BusinessSector from "@/component/section/BusinessSector";
import Solution from "@/component/section/Solution";
export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <About/>
      <Services/>
      <WhyChooseUs/>
      <Engagement/>
      <Process/>
      <GetStarted/>
      <BusinessSector/>
      <Solution/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}
