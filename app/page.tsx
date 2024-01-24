import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video2 from "@/components/Video2";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      {/*<Hero />
      <Features />
      <Video />
  <Brands />*/}
      <AboutSectionThree />
      
      {/*<AboutSectionTwo />
      <Video2 />
      <Testimonials />
      <Pricing />
<Blog />
      <Contact />*/}
    </>
  );
}
