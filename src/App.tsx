// import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
import About from "./components/About";
import Contact from "./components/Contact";
// import Prism from "./components/Prism.tsx";
import ColorBends from "./background_components/ColorBend.tsx";
import Hero from "./components/Hero.tsx";
import Projects from "./components/FeaturedProjects.tsx";
import SkillToolbox from "./components/SkillsToolbox.tsx";
import Experience from "./components/Experience.tsx";
import Footer from "./components/Footer.tsx";

function App() {

  return (
      <div className="relative min-h-dvh no-scrollbar">
          <Helmet>
              <title>Javier Golpe Juarez — Portfolio</title>
              <meta name="description" content="Projects, skills, and contact info." />
          </Helmet>

          {/* Background Animation */}
          <div className="fixed inset-0 dark:bg-black -z-10 h-dvh w-screen overflow-hidden pointer-events-none">
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

          <header className="sticky top-0 m-3 rounded-2xl z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 border-b border-black/5 dark:border-white/5">
              <Navbar />
          </header>

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
