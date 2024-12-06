import "./AboutMain.css";
import { Card } from "react-bootstrap";

function AboutMain() {
  return (
    <>
      <div className="d-flex align-items-center row align-items-stretch justify-content-center py-2">
        <div className=" col-lg-4 d-flex align-items-stretch px-4 ">
          <div className="card shadow-sm  my-4 col-12 px-3 info-card">
            <Card.Title className="fw-bold fs-4 mt-5 ">
              Why Choose Yummy
            </Card.Title>
            <Card.Text className=" my-4 mx-2 card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eos
              quam ut quis, tempora, ipsa sequi libero veniam similique tempore
              mollitia eveniet tempora, ipsa sequi libero veniam similique
              tempor unde vel quidem temporibu stempore mollitia eveniet unde
              dolores quas expedita vero?
            </Card.Text>
            <a href="#" class="btn btn-danger  mb-5 mt-3 rounded-5 ">
              learn more
              <i className="fa-solid fa-chevron-right text-white p-3 card-link-a"></i>
            </a>
          </div>
        </div>
        <div className=" d-flex align-items-center col-lg-8 row pb-4 about-main-small">
          <div className="col-xl-4 gy-4 text-center ">
            <div className="card col-12 shadow-sm px-3">
              <div className="font-icon ">
                <i className="fa-regular fa-file-lines"></i>
              </div>
              <div className="card-body">
                <h5 className="fw-bold py-2">قرار دادها</h5>
                <p className="card-text py-2 mb-4">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 gy-4 text-center  ">
            <div className="card col-12 shadow-sm px-3">
              <div className="font-icon ">
                <i className="fa-regular fa-gem"></i>
              </div>
              <div className="card-body">
                <h5 className="fw-bold py-2">شعبه های دیگر </h5>
                <p className="card-text py-2 mb-4">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 gy-4 text-center ">
            <div className="card col-12 shadow-sm px-3">
              <div className="font-icon ">
                <i className="fa-solid fa-vial-virus"></i>
              </div>
              <div className="card-body">
                <h5 className="fw-bold py-2"> منو</h5>
                <p className="card-text py-2 mb-4">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutMain;
