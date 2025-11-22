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

function App() {
  return (
      <div className="relative min-h-[100dvh] no-scrollbar">
          <Helmet>
              <title>Javier Golpe Juarez — Portfolio</title>
              <meta name="description" content="Projects, skills, and contact info." />
          </Helmet>

          {/* Background Animation */}
          <div className="fixed inset-0 dark:bg-black -z-10 w-screen pointer-events-none">
              <div className="absolute inset-0">
              <ColorBends className="w-full h-full"
                  colors={["#bb1537", "#4806fa", "#00f3cb"]}
                  rotation={0}
                  autoRotate={1}
                  speed={.5}
                  scale={1.5}
                  frequency={1.9}
                  warpStrength={1}
                  mouseInfluence={0.8}
                  parallax={.5}
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
      </div>
  )
}

export default App
