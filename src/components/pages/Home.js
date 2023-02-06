import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.css";

const Home = () => {
  return (
    <>
      <div className="hero_image  row ">
        <div className="container">
          <div className="hero_text row-6 col-lg-6 ">
            <h2>Optimum Lignum</h2>
            <h5>
              Naudojant modernias technologijas ir patyrusią komandą, mes
              siekiame užtikrinti patrauklias ir patvarias baldų ir medienos
              paslaugas, kurios atitika aukščiausius standartus.
            </h5>
            <p>
              Sveiki atvykę į Optimum Lignum. Mes esame medžių gavybos ir
              apdirbimo kompanija. Siekiame pasiūlyti aukščiausios kokybės
              medienos produktus. Mes tikime, kad mūsų produktai daugelį metų teiks malonumą
              ir naudą mūsų klientams. Ačiū, kad pasirinkote mus!
            </p>
          </div>
          <div className="hero_empty row-6 col-lg-6">
            <p>www.optimumlignum.com</p>
          </div>
        </div>
      </div>
      <div className="image_backround">
        <img src="/images/wood-interior-2.3.jpg" alt="" />
      </div>
      <div className="homecontainer">
        <div className="container">
          <div className="home_content">
            <h2>Mūsų paslaugos</h2>
            <div className="grid">
              <div className="grid-unit">
                <img
                  src="/images/home/restauravimas_02.jpg"
                  alt=""
                  className="image"
                />
                <div className="text2">baldų restauravimas</div>
                <div className="overlay">
                  <Link to={"/baldurestauravimas"}>
                    <div className="text">
                      <div className="slider">&#62;</div>
                      <button>daugiau</button>{" "}
                      <div className="slider">&#62;</div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="grid-unit">
                <img src="/images/home/Baldai_04.jpg" alt="" className="image" />
                <div className="text2">baldų gamyba</div>
                <div className="overlay">
                  <Link to={"/baldugamyba"}>
                    <div className="text">
                      <div className="slider">&#62;</div>
                      <button>daugiau</button>{" "}
                      <div className="slider">&#62;</div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="grid-unit">
                <img
                  src="/images/home/interjeras_01.jpg"
                  alt=""
                  className="image"
                />
                <div className="text2"> interjeras</div>
                <div className="overlay">
                  <Link to={"/interjeras"}>
                    <div className="text">
                      <div className="slider">&#62;</div>
                      <button>daugiau</button>{" "}
                      <div className="slider">&#62;</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid-unit">
                <img
                  src="/images/home/visuomeniniai_01.jpg"
                  alt=""
                  className="image"
                />
                <div className="text2">visuomeniniai projektai</div>
                <div className="overlay">
                  <Link to={"/visuomeniniai"}>
                    <div className="text">
                      <div className="slider">&#62;</div>
                      <button>daugiau</button>{" "}
                      <div className="slider">&#62;</div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="grid-unit">
                <img
                  src="/images/home/individualus_01.jpg"
                  alt=""
                  className="image"
                />
                <div className="text2">individualūs projektai</div>
                <div className="overlay">
                  <Link to={"/individualus"}>
                    <div className="text">
                      <div className="slider">&#62;</div>
                      <button>daugiau</button>{" "}
                      <div className="slider">&#62;</div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="grid-unit"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

{
  /* <div className="paslaugos_cont row g-3 ">
<div className="paslaugos row-3 col-lg-3 ">
  <div className="paslaugos_med ">
    <div className="text">restauravimas</div>
    <img src="/images/wood-interior-0.jpg" alt="" />
  </div>
</div> */
}
