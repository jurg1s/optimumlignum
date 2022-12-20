import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="contfooter ">
        <footer className="footercontent">
          <div className="up container border-left">
            <div className=" row">
              <div className="footerinfo row-3 col-lg-3">
                <h4>apie mus</h4>
                <p>
                  Naudojant modernias technologijas ir patyrusią komandą, mes
                  siekiame užtikrinti patrauklias ir patvarias baldų ir medienos
                  paslaugas, kurios atitika aukščiausius standartus.
                </p>

                <img
                  className="logo-ol"
                  src="/images/logo/optimumlignum_logo-wood-grad.svg"
                  alt=""
                />
              </div>
              <div className="footerinfo row-3 col-lg-3">
                <h4>kontaktinė informacija</h4>
                <p>UAB "Optimum Lignum"</p>
                <p>PVM: LT100001819111</p>
                <p>Įmonės kodas: 300060623</p>
                <p>
                  <span className="funicons">&#128205;</span> Gėlių g. 21,
                  Lentvaris, LT-25114 Trakų r.
                </p>
                <p>
                  <span className="funicons">&#128222;</span> +37061114526
                </p>
                <p>
                  <span className="funicons">&#9993;</span>{" "}
                  virgilijus@optimumlignum.lt
                </p>
              </div>
              <div className="footerinfo row-3 col-lg-3">
                <h4>nuorodos</h4>
                <p>
                  <a href="https://optimumlignum.lt/">
                    <span className="funicons">&#128279;</span>
                    www.optimumlignum.lt
                  </a>
                </p>
                <p>
                  <a href="https://rekvizitai.vz.lt/imone/uab_optimum_lignum/">                    <span className="funicons">&#128279;</span>

                    Rekvizitai
                  </a>
                </p>
              </div>
              <div className="footerinfo row-3 col-lg-3">
                <h4>puslapio navigacija</h4>
                <p>
                  <Link to={"/"}>- pagrindinis puslapis</Link>
                </p>
                <p>
                  <Link to={"/baldugamyba"}>- baldų gamyba</Link>
                </p>
                <p>
                  <Link to={"/baldurestauravimas"}>- baldų restauravimas</Link>
                </p>
                <p>
                  <Link to={"/interjeras"}>- interjeras</Link>
                </p>
                <p>
                  <Link to={"/individualus"}>- individualūs projektai</Link>
                </p>
                <p>
                  <Link to={"/visuomeniniai"}>- visuomeniniai projektai</Link>
                </p>
                <p>
                  <Link to={"/apiemus"}>- apie mus</Link>
                </p>
                <p>
                  <Link to={"/kontaktai"}>- kontaktai</Link>
                </p>
              </div>
            </div>
          </div>
        </footer>

        <footer className="container bottom d-flex">
          <p className="link text-center ">
            &copy;copyright. designed and developed by
            <a href="https://www.jurgis-web.tech/"> jurgis-web.tech</a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
