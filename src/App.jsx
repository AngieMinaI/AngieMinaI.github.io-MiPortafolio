import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main>
        <Home />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Work />
        <Contact />
      </main>
    </div>
  );
}

export default App;
