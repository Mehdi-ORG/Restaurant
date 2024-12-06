import "./AboutTop.css";
import AboutImage1 from "../../asset/image/about.jpg";
import AboutImage2 from "../../asset/image/about-2.jpg";

function AboutTop() {
  return (
    <div className="about-sec">
      <div className="about-header">
        <p>ABOUT US</p>
        <h1>
          LEARN MORE <span>ABOUT US</span>
        </h1>
      </div>
      <div className="about-top row">
        <div className="col-lg-7">
          <img src={AboutImage1} className="img-fluid" />
          <div className="about-top-left">
            <p>Book a Table</p>
            <span>+98 921 517 8496</span>
          </div>
        </div>
        <div className="col-lg-5 about-top-right">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A quod
            ipsam enim facilis ullam quisquam obcaecati dolore debitis
            blanditiis.
          </p>
          <ul className="about-ul">
            <li>
              <p>
                <span>
                  <i class="fa-solid fa-check"></i>
                </span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.dolor
                sit ametquia!
              </p>
            </li>
            <li>
              <p>
                <span>
                  <i class="fa-solid fa-check"></i>
                </span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.dolor
                sit ametquia!
              </p>
            </li>
            <li>
              <p>
                <span>
                  <i class="fa-solid fa-check"></i>
                </span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.dolor
                sit ametquia!
              </p>
            </li>
          </ul>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            odit nam et necessitatibus? Alias consequatur accusantium a ipsa,
            eligendi beatae at obcaecati sequi corporis assumenda commodi ad
            repellat et veniam?
          </p>
          <img src={AboutImage2} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
export default AboutTop;
