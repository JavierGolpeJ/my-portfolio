import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import About from "./sections/About.tsx";
import Contact from "./sections/Contact.tsx";
import ColorBends from "./background_components/ColorBend.tsx";
import Hero from "./sections/Hero.tsx";
import Projects from "./sections/FeaturedProjects.tsx";
import SkillToolbox from "./sections/SkillsToolbox.tsx";
import Experience from "./sections/Experience.tsx";
import Footer from "./sections/Footer.tsx";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"


function App() {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const colorBendScale = isMobile ? .02 : 1.5;
    const colorBendFrequency = isMobile ? 2 : 1.9;
    const colorBendRotate = isMobile ? .025 : 1;
    const colorBendRotation = isMobile ? 0 : 0;
    const colorBendSpeed = isMobile ? .5 : .5;
    const colorBendWarp = isMobile ? 1 : 1;
    const colorBendParallax = isMobile ? .7 : .5;

  return (
      <div className="relative min-h-[100svh] no-scrollbar">
          <Helmet>
              <title>Javier Golpe Juarez — Portfolio</title>
              <meta name="description" content="Projects, skills, and contact info." />
          </Helmet>

          {/* Background Animation */}
          <div className="pointer-events-none
          absolute inset-0
          md:fixed md:h-[200svh]
          dark:bg-black -z-10 w-full
          transform-gpu will-change-transform">
              <div className="absolute inset-0">
              <ColorBends className="w-full h-full md:h-screen"
                  colors={["#bb1537", "#4806fa", "#00f3cb"]}
                  rotation={colorBendRotation}
                  autoRotate={colorBendRotate}
                  speed={colorBendSpeed}
                  scale={colorBendScale}
                  frequency={colorBendFrequency}
                  warpStrength={colorBendWarp}
                  mouseInfluence={0.8}
                  parallax={colorBendParallax}
                  noise={0}
              />
              </div>
          </div>

          {/*Nav*/}
          <Navbar />

          {/* Main Content */}
          <main className="relative z-10">
              <Hero />
              <Projects />
              <SkillToolbox />
              <Experience />
              <About />
              <Contact />
              <Footer />
          </main>

          <Analytics/>
          <SpeedInsights/>

      </div>
  )
}

export default App
