import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Services />
      <CTA />
      <Testimonial />
      <Contactus />
      <Footer />
    </div>
  );
}
