import React from 'react';
import { ProfileInfo } from './Sidebar1/SidebarData';
let background1 = '#1e2124';
const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    fill="currentColor"
    class="bi bi-play-fill"
    viewBox="0 0 16 16"
  >
    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
  </svg>
);
const year1 = new Date(Date.now()).getFullYear();
function Loader() {
  return (
    <div className="loader1">
      <div className="loading-header" style={{ textAlign: "center" }}>
        <div className="pb-2">
          <h1>Loading.</h1>
          {/* <a href="#/" className="btn-outlined-gray text-black mt-3">
            {icon}
          </a> */}
        </div>
        <div className="box">
          <img
            src={`https://MichiasShiferaw.github.io/IMG/ghost2.png`}
            className="ghost"
          />
          <img
            src={`https://MichiasShiferaw.github.io/IMG/ghost1.png`}
            className="ghost"
          />
          <img
            src={`https://MichiasShiferaw.github.io/IMG/ghost3.png`}
            className="ghost"
          />
          <img
            src={`https://MichiasShiferaw.github.io/IMG/ghost4.png`}
            className="ghost"
          />
        </div>
        <footer>
          <div className="footer mt-0 mb-1">
            <div className="container">
              <span> Michias Shiferaw {year1}</span>
            </div>
          </div>
          <br />
          <div className="container">
            <ul className="display-f justify-space-between">
              {ProfileInfo.map((val,key) => {
                return (
                  <li className="text-gray text-hover-pacorange" key={key}>
                    <a
                      className=" p-0"
                      href={val.link}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <div id="icon" title={val.title}>
                        {val.icon}
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Loader