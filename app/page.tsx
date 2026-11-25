import About from "@/components/About";
import Contact from "@/components/Contact";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import History from "@/components/History";
import IconSprite from "@/components/IconSprite";
import MobileActionBar from "@/components/MobileActionBar";
import Partners from "@/components/Partners";
import Products from "@/components/Products";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import SkipLink from "@/components/SkipLink";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <>
      <IconSprite />
      <SkipLink />
      <TopBar />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Products />
        <History />
        <Projects />
        <Services />
        <Partners />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
