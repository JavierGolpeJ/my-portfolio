// import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Prism from "./components/Prism.tsx";
import Hero from "./components/Hero.tsx";
import Projects from "./components/FeaturedProjects.tsx";
import SkillToolbox from "./components/SkillsToolbox.tsx";
import Experience from "./components/Experience.tsx";
import Footer from "./components/Footer.tsx";

function App() {

  return (


      <div className="relative min-h-screen bg-black no-scrollbar">
          <Helmet>
              <title>Javier Golpe Juarez — Portfolio</title>
              <meta name="description" content="Projects, skills, and contact info." />
          </Helmet>

          {/* Prism background */}
          <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">
              <Prism
                  animationType="3drotate"
                  timeScale={0.5}
                  height={5.5}
                  baseWidth={5.5}
                  scale={5}
                  hueShift={0}
                  colorFrequency={1}
                  noise={0}
                  glow={1}
              />
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
