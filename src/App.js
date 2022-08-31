import './App.css';

import Sidebar from './Components/Sidebar1/Sidebar';
import { ProfileInfo } from './Components/Sidebar1/SidebarData';
import logo from './Portrait1.png';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';

import Project from './Components/Project/Project';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Sidebar>
        <div className="container mt-5" id="Home">
          <img
            src={`https://MichiasShiferaw.github.io/IMG/Pacman/pacman4.png`}
            id="yourdiv1"
          />
          <img
            src={`https://MichiasShiferaw.github.io/IMG/Pacman/pacman3.png`}
            id="yourdiv2"
          />
          {/* <img
            src={`https://MichiasShiferaw.github.io/IMG/Pacman/pacman1.png`}
            id="yourdiv3"
          /> */}

          <img
            src={`https://MichiasShiferaw.github.io/IMG/Pacman/pacman2.png`}
            id="yourdiv4"
          />
          <div className="row justify-center">
            <div className="col-12-xs col-9-md">
              <p className="text-gray mb-2"> Hi</p>

              <h2>
                <div className="font-xxl text-white">Michias Shiferaw</div>
                <div style={{ color: " #3f51b5" }} className="font-xl">
                  Developer
                </div>
              </h2>
              <p className="text-gray mt-2 mb-3">Welcome to my Website!</p>
              <a
                href="#Project"
                className="btn-outlined-secondary text-secondary text-hover-white"
              >
                <span className="display-b">
                  View My Work<i className="h2 bi bi-caret-right-fill"></i>
                </span>
              </a>
            </div>
            <div id="mylogo1" className="col-12-xs col- col-3-md ">
              <img src={logo} alt="Logo" />
            </div>
          </div>
        </div>

        <About />
        <Experience />
        <Project />

        <Contact />

        <Footer />
      </Sidebar>
    </div>
  );
}

export default App;
