import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../src/components/Footer';
import Footer from '../src/components/Footer';
import './App.css';
import NavigationBar from './components/NavigationBar';
import About from './pages/About';
import Contact from "./pages/Contact";
import ProjectDisplay from "./pages/ProjectDisplay";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/experience" element={<Experience />} /> */}
          <Route path="project/:id" element={<ProjectDisplay />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          { /** As a technique to add the navigation imports, after completing the process of adding the routes 
           * then go to the element value in each one and delete the last letter of the word.  This will present
           * a list at which point one should just click the item on the list presented to automatically import
           * the relevant component.
           */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
