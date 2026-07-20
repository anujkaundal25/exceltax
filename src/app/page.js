import Approach from "@/component/section/Approach";
import ContactUs from "@/component/section/ContactUs";
import GetStarted from "@/component/section/GetStarted";
import HeroSection from "@/component/section/HeroSection";
import Process from "@/component/section/Process";
import Services from "@/component/section/Services";
import WhyChooseUs from "@/component/section/WhyChooseUs";
import Header from "@/component/ui/Header";
import Footer from "@/component/ui/Footer";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Approach/>
      <Services/>
      <WhyChooseUs/>
      <Process/>
      <GetStarted/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}
