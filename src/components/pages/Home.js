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
              apdirbimo kompanija. Mes siekiame pasiūlyti aukščiausios kokybės
              medienos produktus mūsų klientams. Mūsų komanda yra patyrusi ir
              profesionali, sugebanti suderinti efektyvumą ir dėmesingumą
              aplinkai. Mes dirbame tik su atsakingai gauta mediena, siekiame
              sumažinti mūsų pėdsaką gamtoje ir užtikrinti, kad mūsų veikla būtų
              tvari. Mes tikime, kad mūsų produktai teiks daugelį metų malonumą
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
      <div class="homecontainer">
        <div className="container">
          <div className="home_content">
            <h2>Mūsų paslaugos</h2>
            <div className="grid">
              <div className="grid-unit">
                <img
                  src="/images/home/restauravimas_02.jpg"
                  alt=""
                  class="image"
                />
                <div class="text2">baldų restauravimas</div>
                <div class="overlay">
                  <Link to={"/baldurestauravimas"}>
                    <div class="text">
                      <div className="slider">&#62;</div>
                      <button>daugiau</button>{" "}
                      <div className="slider">&#62;</div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="grid-unit">
                <img src="/images/home/Baldai_04.jpg" alt="" class="image" />
                <div class="text2">baldų gamyba</div>
                <div class="overlay">
                  <Link to={"/baldugamyba"}>
                    <div class="text">
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
                  class="image"
                />
                <div class="text2"> interjeras</div>
                <div class="overlay">
                  <Link to={"/interjeras"}>
                    <div class="text">
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
                  class="image"
                />
                <div class="text2">visuomeniniai projektai</div>
                <div class="overlay">
                  <Link to={"/visuomeniniai"}>
                    <div class="text">
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
                  class="image"
                />
                <div class="text2">individualūs projektai</div>
                <div class="overlay">
                  <Link to={"/individualus"}>
                    <div class="text">
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
    <div class="text">restauravimas</div>
    <img src="/images/wood-interior-0.jpg" alt="" />
  </div>
</div> */
}
