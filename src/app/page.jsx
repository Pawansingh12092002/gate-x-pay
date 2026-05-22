"use client";

import Header from "../component/header/Header";
import Hero from "../component/header/Hero";
import Services from "../component/Services/Services";
import WhyChooseUs from "../component/WhyChooseUs/WhyChooseUs";
import HowWeWork from "../component/HowWeWork/HowWeWork";
import Industries from "../component/Industries/Industries";
import FAQ from "../component/FAQ/FAQ";
import LocationMap from "../component/LocationMap/LocationMap";
import CTA from "../component/CTA/CTA";
import ContactForm from "../component/ContactForm/ContactForm";
import Footer from "../component/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowWeWork />
      <Industries />
      <FAQ />
      <LocationMap />
      <CTA />
      <ContactForm />
      <Footer />
    </>
  );
}
