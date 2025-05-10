import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <main className="font-mono">
        <Header />
        <Hero />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </>
  );
}

export default App;
