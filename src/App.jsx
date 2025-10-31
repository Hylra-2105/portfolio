import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function App() {
  return (
    <div className="bg-gray-800 text-white min-h-screen font-sans">
      <Header />
      <main className="px-8 md:px-16 lg:px-24">
        <section id="home">
          <Hero />
        </section>

        <section id="projects" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
            Projects
          </h2>
          <Projects />
        </section>

        <footer id="contact" className="py-16 border-t border-gray-700">
          <Contact />
        </footer>
      </main>
    </div>
  );
}
