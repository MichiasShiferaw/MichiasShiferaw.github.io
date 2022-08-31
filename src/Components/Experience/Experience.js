import React from 'react'
import { SchoolData } from './SchoolData'
import { WorkData } from './WorkData'

function School() {
  return (
    <section id="Code" className="mt-5">
      <div className="container text-dark">
        <div className="row pb-3 gap-2 text-white ">
          <div className="col-12-md col-6-lg">
            <h1 className="text-pacman pb-2">Education...</h1>
            <div className="educate rounded overflow-hidden">
              {SchoolData.map((val, key) => {
                return (
                  <div
                    key={key}
                    className="card education display-f mb-3 w-100 p-3 pb-1 border-bottom"
                    data-aos="flip-down"
                  >
                    <div className="symbol text-pacred display-f justify-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="currentColor"
                        className="bi bi-mortarboard"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
                      </svg>
                    </div>
                    <div className="content mb-4 pl-3">
                      <span className="time">{val.time}</span>
                      <h3 className="title  mt-1"> {val.title}</h3>
                      <h5 className="lead  mt-1"> {val.institution}</h5>
                      <span>
                        <i className="bi bi-geo-alt me-2"></i> {val.location}
                      </span>
                      {val.coursework ? (
                        <small>
                          <br />
                          <br />
                          <strong>{val.subtitle}</strong>:{" "}
                          {val.coursework.toString()}
                        </small>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
          <div className="col-12-md col-6-lg">
            <h1 className="text-pacman pb-2">Experience...</h1>
            <div className="educate rounded overflow-hidden">
              {WorkData.map((val, key) => {
                return (
                  <div
                    key={key}
                    className="card education display-f mb-3 w-100 p-3 pb-1 border-bottom"
                    data-aos="flip-down"
                  >
                    <div className="text-pacorange display-f justify-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="currentColor"
                        className="bi bi-briefcase"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                      </svg>
                    </div>
                    <div className="content mb-3 pl-3">
                      <span className="time mt-1">{val.time}</span>
                      <h3 className="title mt-1"> {val.title}</h3>
                      <h4 className="lead mt-1"> {val.institution}</h4>
                      <div className="mt-1">
                        <i className="bi bi-geo-alt me-2"></i> {val.location}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default School