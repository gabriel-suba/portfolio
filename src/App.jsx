import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Offer from "./Components/Offer";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="custom-container">
      <div className="custom-container--main custom-font--inter">
        <Nav />
        <Hero />
        <Offer />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
