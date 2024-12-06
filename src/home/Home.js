import "./Home.css";
import NavBar from "../navbar/Navbar";
import image1 from "../asset/image/menu-item-1.png";
import AboutTop from "../about/aboutTop/AboutTop";
import AboutMain from "../about/aboutMain/AboutMain";
import AboutBTM from "../about/aboutbottom/AboutBTM";

function Home() {
  return (
    <>
      <NavBar />
      <section className="home-sec">
        <div className="home row gy-1">
          <div className="home-pic col-lg-5">
            <img src={image1} className="home-image img-fluid" />
          </div>
          <div className="home-text col-lg-5">
            <h1>ENJOY YOUR HEALTHY DELICIOUS FOOD</h1>
            <p>I am a talented web designer make website by react </p>
            <button className="btn btn-danger rounded-5">Book a Table</button>
            <button className="btn btn-success rounded-5 ms-5">see menu</button>
          </div>
        </div>
      </section>
      <AboutTop/>
      <AboutMain/>
      <AboutBTM/>
    </>
  );
}
export default Home;
