import React, { useEffect, useState } from 'react';
import logo from '../../Portrait2.png';
import {getDownloadURL,ref} from 'firebase/storage';
import storage from '../../config/firebase';
import FileSaver, {saveAs} from 'file-saver';

function About(props) {
  const [resume, setResume]=useState(null);
    var message="Hello, my name is Michias. I am a third year software engineering student. I enjoy all things related to programming ";

    return (
      <section id="about" className="mt-5 pt-2 pb-2">
        <div className="row justify-content-between">
          <div className="col-3-md"></div>

          <div className="col-md"></div>
        </div>
        <div className="container bg-warning-light-8 ">
          <div className="row">
            <div className="col-3-md">
              <img
                src={`https://MichiasShiferaw.github.io/IMG/Pacman/Arrow.png`}
                id="arrow"
              />
            </div>
            <div className="col-9-md">
              <div className="p-3">
                <h2 className="mb-2 text-pacman">
                  About Me!...
                </h2>
                <p className="text-white">{message}</p>
                <a
                  href={`https://docs.google.com/document/d/1YxbV18iOSKdg-i7Z_iw8PkySyqgToFfb3rXq8omBLHE/edit?usp=sharing`}
                  // download={`https://MichiasShiferaw.github.io/extra/Michias_Shiferaw_Resume.pdf`}
                  className="btn btn-outlined-primary mt-4"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About