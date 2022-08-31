import React from 'react';
import { ProfileInfo } from '../Sidebar1/SidebarData';

function Footer() {
  return (
    <>
      <footer className="bg-gray-light-7 justify-between pt-2 mt-4">
        <div className="footer container mt-2 mb-2">
          <div>
            <span className="site-title">Logo </span>
            <span className="site-title">Michias Shiferaw</span>
          </div>
          <ul className="display-f">
            {ProfileInfo.map((val, key) => {
              return (
                <li className="ml-1 text-hover-secondary" key={key}>
                  <a
                    className="btn p-0"
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
      </footer>
    </>
  );
}

export default Footer