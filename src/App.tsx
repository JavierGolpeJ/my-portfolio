import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {

  return (
      <div className="min-h-screen bg-white text-slate-900">
          <Helmet>
              <title>Javier Golpe Juarez — Portfolio</title>
              <meta name="description" content="Projects, skills, and contact info." />
          </Helmet>

          <Navbar />

          <main className="mx-auto max-w-5xl px-4 pb-16 pt-8">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
              </Routes>
          </main>
      </div>
  )
}

export default App
