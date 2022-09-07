import './App.css';

import Sidebar from './Components/Sidebar1/Sidebar';
import logo from './Portrait1.png';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Project from './Components/Project/Project';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Loader from './Components/Loader';
import {collection, getDocs} from 'firebase/firestore';
import { db } from './config/firebase';
function App() {
  const [lyricsItem,setLyricsItems]= useState(null);
  //const [loading,setLoading]= useState(false);
  const [rendered, setRendered] = useState(false);
  const [data1, setdata1]= useState([]);
  const [loading, setLoading] = useState(undefined);
  const [completed, setCompleted]= useState(undefined);

    const[educationExp, setEducationExp]=useState([]);
    const [projectExp, setProjectExp] = useState([]);
    const [workExp, setWorkExp] = useState([]);
  const workExpCollectionRef= collection(db,"workExp")
  const eduExpCollectionRef = collection(db, "eduExp");
    const projectCollectionRef = collection(db, "project");


    const getWorkExp = async () => {
      try{
      let data = await getDocs(workExpCollectionRef);
      setWorkExp(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      data = await getDocs(eduExpCollectionRef);
      setEducationExp(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      data = await getDocs(projectCollectionRef);
      setProjectExp(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setLoading(true);
      } catch(e){
        console.log(e)
        
      }
    };
  useEffect(()=>{
    setTimeout(() => {
      getWorkExp();
    }, 3000);
    setLoading(false);

    
    

  },[]);
  return (
    <div className="App">
      {loading ? (
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

          <About data="three" />
          <Experience work={workExp} education={educationExp} />
          <Project project={projectExp} />

          <Contact />

          <Footer />
        </Sidebar>
      ) : (
        <Loader />
      )}
      {/* {loading?(lyricsItem):(console.log("Hi"))} */}
    </div>
  );
}

export default App;
