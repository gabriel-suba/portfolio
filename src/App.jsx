import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Offer from "./Components/Offer";
import Projects from "./Components/Projects";
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
        <Footer />
      </div>
    </div>
  );
}

export default App;
