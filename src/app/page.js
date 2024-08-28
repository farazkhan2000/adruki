import react from "react";
import Hero from "@/components/Hero";
// import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import Process from "@/components/Process";
// import CallToAction from "@/components/CallToAction";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import Promo from "@/components/Promo";

export default function Page() {
  return (
    <>
      <Hero />
      {/* <TrustedBy /> */}
      {/* <Promo /> */}
      <Process /> 
      <Services />
      {/* <CallToAction /> */}
      <Portfolio />
      <Footer />
    </>
  )
}