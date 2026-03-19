import Navbar from "./components/navbar/navbar"
import Hero from "./components/hero/hero"
import Experience from "./components/experience/experience"
import About from "./components/about/about"
import Projects from "./components/projects/projects"
import Footer from "./components/footer/footer"

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </>
  )
}
