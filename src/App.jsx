import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./components/home";
import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Certificates from "./components/certificates";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Home />
        <Skills />
        <AboutMe />
        <Projects />
        <Certificates />
        <Footer />
      </>
    </Router>
  );
}

export default App;
