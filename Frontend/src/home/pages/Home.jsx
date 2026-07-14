import Footer from "../../ui/components/Footer";

import BackgroundEffects from "../components/BackgroundEffects";
import HeroSection from "../components/HeroSection";
import ResumeSection from "../components/ResumeSection";
import FeaturesSection from "../components/FeaturesSection";
import CTASection from "../components/CTASection";
import NavbarHome from "../../ui/components/NavbarHome";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0F0F0F] text-white">
      <BackgroundEffects />

      <NavbarHome />

      <section id="home">
        <HeroSection />
      </section>

      <section id="resume">
        <ResumeSection />
      </section>

      <section id="features">
        <FeaturesSection />
      </section>

      <section id="cta">
        <CTASection />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
