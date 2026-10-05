import Header from "./components/Header";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import Services from "./components/Services";
import SplitFeature from "./components/SplitFeature";
import Why from "./components/Why";
import ResComm from "./components/ResComm";
import Projects from "./components/Projects";
import CtaBanner from "./components/CtaBanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { IMAGES } from "./data/content";

export default function App() {
  return (
    <div className="bg-paper font-sans text-ink">
      <Header />
      <main>
        <Hero />
        <Trust />
        <Services />

        <SplitFeature
          id="concrete"
          tag="Concrete Services"
          title={["Solid Foundations", "Start With Quality Work."]}
          copy="BH Contracting delivers professional concrete work for homes, businesses, and property improvements throughout Albuquerque. From new pours and slab work to repairs and finished surfaces, we build with precision — proper placement, clean lines, and a finish that holds up over time."
          bullets={[
            "Professional workmanship",
            "Residential & commercial projects",
            "Durable, clean finishes",
            "Project-focused service",
          ]}
          image={IMAGES.concrete}
          alt="Concrete crew leveling a fresh pour on a New Mexico job site"
          caption="RESIDENTIAL & COMMERCIAL CONCRETE"
          ctaLabel="Get a Free Estimate"
          ctaHref="#contact"
          ctaVariant="red"
          sectionClass="bg-paper"
        />

        <SplitFeature
          id="stucco"
          tag="Stucco Services"
          title={["A Finish That Protects", "And Elevates Your Property."]}
          copy="Professional stucco gives your property a clean, finished exterior while adding real protection to the wall behind it. BH Contracting applies stucco with attention to the surface, the details, and the final appearance — a finish that stands up to New Mexico weather and keeps your property looking sharp for years."
          bullets={[
            "Exterior improvements",
            "Professional application",
            "Clean finished appearance",
            "Residential & commercial work",
          ]}
          image={IMAGES.stucco}
          alt="Stucco being troweled onto an exterior wall"
          caption="EXTERIOR STUCCO FINISH"
          ctaLabel="Talk to BH Contracting"
          ctaHref="#contact"
          ctaVariant="ink"
          reverse
          sectionClass="bg-white"
        />

        <Why />
        <ResComm />
        <Projects />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
