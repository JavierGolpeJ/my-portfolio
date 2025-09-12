import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Prism from "./components/Prism.tsx";

function App() {

  return (
          <div >
              <Helmet>
                  <title>Javier Golpe Juarez — Portfolio</title>
                  <meta name="description" content="Projects, skills, and contact info." />
              </Helmet>
              <Navbar />

              <div style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
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
                  <main className="mx-auto max-w-5xl px-4 pb-16 pt-8 absolute inset-0 z-1">
                      <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/about" element={<About />} />
                          <Route path="/contact" element={<Contact />} />
                      </Routes>
                  </main>
              </div>

          </div>

  )
}

export default App
