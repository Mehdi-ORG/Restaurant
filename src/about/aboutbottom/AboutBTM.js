import { useEffect } from "react";
import "./AboutBTM.css";
import "@srexi/purecounterjs";
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutBTM() {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(()=>{
    const PureCounter = require("@srexi/purecounterjs");
    new PureCounter();
  },[])

  return (
    <div className="about-btn">
      <div className="p-5">
        <div className="row px-5 gy-5">
          <div className="col-lg-3 col-md-6 ">
            <div className="rounded about-btn-text" data-aos="fade-up">
              <h1
                data-purecounter-start="0"
                data-purecounter-end="234"
                data-purecounter-duration="3"
                className="purecounter"
              >
                234
              </h1>
              <p>client </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 ">
            <div className="rounded g-5 about-btn-text" data-aos="fade-up">
              <h1
                data-purecounter-start="0"
                data-purecounter-end="511"
                data-purecounter-duration="3"
                className="purecounter"
              >
                511
              </h1>
              <p> project </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 ">
            <div className="rounded g-5 about-btn-text" data-aos="fade-up">
              <h1
                data-purecounter-start="0"
                data-purecounter-end="1452"
                data-purecounter-duration="3"
                className="purecounter"
              >
                1452
              </h1>
              <p> hours of support </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 ">
            <div className="rounded g-5 about-btn-text" data-aos="fade-up">
              <h1
                data-purecounter-start="0"
                data-purecounter-end="31"
                data-purecounter-duration="3"
                className="purecounter"
              >
                31
              </h1>
              <p> workers </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutBTM;

